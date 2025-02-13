import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { ScrollView } from "react-native";

const Login: React.FC = () => {
  return (
    <View
      style={{
        height: 100,
        gap: 7,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <Text style={{ textAlign: "center", fontSize: 20 }}>Username</Text>
          <TextInput
            style={{
              borderStyle: "solid",
              borderWidth: 1,
              borderRadius: 10,
              minWidth: "80%",
            }}
          ></TextInput>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
