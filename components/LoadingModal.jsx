import React from "react";
import { ActivityIndicator, Modal, Portal } from "react-native-paper";
import { COLOR, GLOBAL } from "../global_styles";
import { StyleSheet } from "react-native";

const LoadingModal = ({ loading }) => {
  return (
    <Portal>
      <Modal
        visible={loading}
        contentContainerStyle={[GLOBAL.center, style.container]}
      >
        <ActivityIndicator size={150} color={COLOR.primary} />
      </Modal>
    </Portal>
  );
};

const style = StyleSheet.create({ container: { flex: 1, flexGrow: 1 } });

export default LoadingModal;
