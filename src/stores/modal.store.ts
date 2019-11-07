import { RootStore } from "./root.store";
import { observable, action } from "mobx";

class ModalStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  };

  @observable.shallow modal = {
    open: false,
    body: null
  };

  @action openModal = (content: any) => {
    this.modal = { open: true, body: content };
  };

  @action closeModal = () => {
    this.modal = { open: false, body: null }
  };
}

export default ModalStore;