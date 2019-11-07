import { observable, computed, action, runInAction } from 'mobx';
import { IUser, IUserFormValues } from '../models/user';
import agent from '../api/agent';
import { RootStore } from './root.store';
import { history } from '..';

class UserStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable user: IUser | null = null;

  @computed get isLogin() { return !!this.user };

  @action login = async (values: IUserFormValues) => {
    try {
      const res = await agent.User.login(values);
      runInAction(() => {
        this.user = { token: res.accessToken, email: values.email };
      });
      this.rootStore.commonStore.setToken(res.accessToken);
      history.push('/activities');
    }
    catch (err) {
      throw err;
    }
  };

  @action logout = () => {
    this.rootStore.commonStore.setToken('');
    this.user = null;
    history.push('/');
  };
};

export default UserStore;