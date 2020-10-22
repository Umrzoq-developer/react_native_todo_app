import React, { useState } from "react";
import {
  View,
  Modal,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { THEME } from "../../theme";

const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value);

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        "Error!",
        `Minimum length name 3 letters. Now ${title.trim().length} letter`
      );
    } else {
      onSave(title);
    }
  };

  return (
    <Modal transparent={false} animationType="slide" visible={visible}>
      <View style={styles.wrapper}>
        <TextInput
          value={title}
          onChangeText={(title) => setTitle(title)}
          style={styles.input}
          placeholder="Edit name"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <Button
            title="Cancel"
            onPress={onCancel}
            color={THEME.DANGER_COLOR}
          />
          <Button title="Save" onPress={saveHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
    width: "80%",
  },
  buttons: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default EditModal;
