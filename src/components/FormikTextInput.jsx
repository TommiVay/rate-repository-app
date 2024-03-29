import React from "react";
import { StyleSheet, View } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  textInput: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderWidth: 1,
    borderStyle: "solid",
    fontSize: theme.fontSizes.subheading,
    fontFamily: theme.fonts.main,
    color: theme.colors.textPrimary,
    borderRadius: theme.borderRadius,
    borderColor: "#aab2bb",
    backgroundColor: "#FFFFFF",
  },
  errorText: {
    marginTop: 5,
    color: "#d73a4a",
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput;
