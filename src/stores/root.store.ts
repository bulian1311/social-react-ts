import { configure } from 'mobx';
import ActivityStore from './activity.store';
import UserStore from './user.store';
import CommonStore from './common.store';
import { createContext } from 'react';

configure({ enforceActions: "always" });

export class RootStore {
  activityStore: ActivityStore;
  userStore: UserStore;
  commonStore: CommonStore

  constructor() {
    this.activityStore = new ActivityStore(this);
    this.userStore = new UserStore(this);
    this.commonStore = new CommonStore(this);
  }
};

export const RootStoreContext = createContext(new RootStore());