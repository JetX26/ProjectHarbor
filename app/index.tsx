import { View } from "react-native";
import Intro from "../src/screens/Intro";
import Login from "@/src/components/LoginInput";
import Posts from "../app/posts";

export default function HomeScreen() {
  return (
    <View style={{ display: "flex" }}>
      <Intro logoIcon={0} />
    </View>
  );
}
