import React from 'react';
import { Modal as SemanticModal } from 'semantic-ui-react';
import { RootStoreContext } from '../../stores/root.store';
import { observer } from 'mobx-react-lite';

const Modal = () => {
  const rootStore = React.useContext(RootStoreContext);
  const { modal: { open, body }, closeModal } = rootStore.modalStore;
  return (
    <SemanticModal open={open} onClose={closeModal} size="mini">
      <SemanticModal.Content>
        {body}
      </SemanticModal.Content>
    </SemanticModal>
  );
};

export default observer(Modal);
