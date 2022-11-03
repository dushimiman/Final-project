import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/biconw.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.title}>BLOOD BANK</Text>
        <Text style={styles.text}>Signin or create an account</Text>
        <View style={styles.button}>
          <Button title="Get Started" />
        </View>
      </View>
    </View>
  );
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#d60033",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#360606",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center'
  },
  text: {
    color: "#999",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  button: {
    color: "#000",
    backgroundColor: "#d60033",
  },
});
