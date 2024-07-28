import React, { memo } from "react";
import { ActivityIndicator, Modal, Portal } from "react-native-paper";
import { COLOR, GLOBAL } from "../global_styles";
import { StyleSheet } from "react-native";
import { useAuthStore, useStateStore } from "../stores";

const LoadingModal = memo(({ loading }) => {
  const mode = useStateStore((state) => state.mode);

  return (
    <Portal>
      <Modal
        visible={loading}
        contentContainerStyle={[GLOBAL.center, style.container]}
      >
        <ActivityIndicator
          size={150}
          color={mode ? COLOR.primary : COLOR.secondary}
        />
      </Modal>
    </Portal>
  );
});

const style = StyleSheet.create({ container: { flex: 1, flexGrow: 1 } });

export default LoadingModal;
