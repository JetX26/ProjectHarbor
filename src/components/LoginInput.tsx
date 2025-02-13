import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Button,
  Pressable,
  Keyboard,
} from "react-native";
import { ScrollView } from "react-native";
import { setUpTests } from "react-native-reanimated";

const Login: React.FC = () => {
  let [grabInput, setGrabInput] = useState("");

  const handleTextInput = () => {
    Keyboard.dismiss();
    console.log(grabInput);
    setGrabInput("");
  };

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
          <View style={{ gap: 10 }}>
            <TextInput
              style={{
                borderStyle: "solid",
                borderWidth: 1,
                borderRadius: 10,
                minWidth: "80%",
                padding: 5,
              }}
              placeholder="Enter a username..."
              onChangeText={setGrabInput}
              onSubmitEditing={handleTextInput}
              value={grabInput}
            ></TextInput>
            <View style={{ display: "flex", alignItems: "center" }}>
              <Pressable
                onPress={handleTextInput}
                style={styles.pressableComponent}
              >
                <Text>Submit</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  pressableComponent: {
    width: "40%",
    height: 28,
    // backgroundColor: "blue",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});

export default Login;
