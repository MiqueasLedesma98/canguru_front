import React, { useCallback } from "react";
import { Modal, Portal } from "react-native-paper";
import { GLOBAL } from "../global_styles";

const ModalCustom = ({
  children,
  component: Component,
  open,
  dismissable,
  onDismiss,
}) => {
  const renderComponent = useCallback(() => <Component />, [Component]);

  return (
    <>
      {children}
      <Portal>
        <Modal
          visible={open}
          dismissable={dismissable}
          onDismiss={onDismiss}
          contentContainerStyle={[GLOBAL.screenContainer, GLOBAL.center]}
        >
          {renderComponent()}
        </Modal>
      </Portal>
    </>
  );
};

export default React.memo(ModalCustom);
