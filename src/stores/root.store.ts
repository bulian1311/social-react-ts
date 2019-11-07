import { configure } from 'mobx';
import ActivityStore from './activity.store';
import UserStore from './user.store';
import CommonStore from './common.store';
import { createContext } from 'react';
import ModalStore from './modal.store';

configure({ enforceActions: "always" });

export class RootStore {
  activityStore: ActivityStore;
  userStore: UserStore;
  commonStore: CommonStore;
  modalStore: ModalStore

  constructor() {
    this.activityStore = new ActivityStore(this);
    this.userStore = new UserStore(this);
    this.commonStore = new CommonStore(this);
    this.modalStore = new ModalStore(this);
  }
};

export const RootStoreContext = createContext(new RootStore());