import {
  Image,
  StyleSheet,
  Platform,
  View,
  Dimensions,
  Text,
  ImageSourcePropType,
} from "react-native";
import { HelloWave } from "../components/HelloWave";
import LoginInput from "../components/LoginInput";

const homepageLogo = require("../../assets/images/anchor-logo.png");

interface IntroProps {
  logoIcon: ImageSourcePropType;
}

const Intro: React.FC<IntroProps> = ({ logoIcon }) => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerStyle}>
        <Image style={styles.anchorLogo} source={homepageLogo}></Image>
      </View>
      <View style={styles.introContainer}>
        <Text style={styles.introChild1}>
          Welcome to{" "}
          <Text style={[styles.introChild1, { fontWeight: "bold" }]}>
            Postbor!
          </Text>
          <HelloWave></HelloWave>
        </Text>
        <View style={styles.introChild2}>
          <View style={{ gap: 5 }}>
            <Text style={{ fontSize: 20 }}>
              <Text style={{ fontWeight: "bold" }}>Step 1</Text>: Enter a
              username
            </Text>
            <Text style={{ fontSize: 15 }}>
              Each username is unique, but usage for each username is reset on
              site exit.
            </Text>
          </View>
          <View style={{ gap: 5 }}>
            <Text style={{ fontSize: 20 }}>
              <Text style={{ fontWeight: "bold" }}>Step 2</Text>: Post what's on
              your mind
            </Text>
            <Text style={{ fontSize: 15 }}>
              Go to the Posts tab to post and see what others are posting.
            </Text>
          </View>
        </View>
        <LoginInput></LoginInput>
      </View>
    </View>
  );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  anchorLogo: {
    height: 100,
    width: 100,
    maxHeight: 100,
    maxWidth: 100,
    margin: 25,
  },
  headerStyle: {
    // height: 175,
    backgroundColor: "#219ebc",
    display: "flex",
    justifyContent: "center",
  },
  pageContainer: {
    display: "flex",
    height: height,
  },
  introContainer: {
    display: "flex",
    padding: "5%",
    gap: 30,
  },
  introChild1: {
    display: "flex",
    fontSize: 25,
  },
  introChild2: {
    gap: 35,
  },
});

export default Intro;
