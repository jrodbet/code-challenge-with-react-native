import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Navigation } from "react-native-navigation";

export default StartScreen = (props) => {
  const showFirstPopUp = () => {
    Navigation.push(props.componentId, {
      component: {
        name: "PopupScreen",
      },
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/galaxy-4-gradient-detailed-3-x.png")}
        style={styles.imageBackground}
      >
        <Image
          source={require("../assets/logo-black.png")}
          style={styles.logoAumio}
        />
        <Text style={styles.dieReiseDurchDen}>
          Die Reise durch den inneren Kosmos
        </Text>
        <Text style={styles.achtsamkeitUndMedi}>
          Achtsamkeit und Meditation für Kinder
        </Text>
        <TouchableOpacity
          style={styles.rectangle}
          onPress={() => showFirstPopUp()}
        >
          <Text style={styles.jetztReisepassAnlegen}>
            Jetzt Reisepass anlegen
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    flex: 1,
    width: 375,
    height: 667,
    paddingTop: 168,
    paddingRight: 23,
    paddingBottom: 83,
    paddingLeft: 24,
    resizeMode: "contain",
  },
  logoAumio: {
    width: 83,
    height: 26,
    marginTop: 0,
    marginRight: 123,
    marginBottom: 30,
    marginLeft: 122,
    resizeMode: "contain",
  },
  dieReiseDurchDen: {
    width: 248,
    height: 116,
    marginHorizontal: 40,
    marginBottom: 32,
    fontFamily: "Poppins-Regular",
    fontSize: 28,
    fontWeight: "800",
    fontStyle: "normal",
    // lineHeight: 1.14,
    textAlign: "center",
    color: "#fff",
  },
  achtsamkeitUndMedi: {
    width: 216,
    height: 48,
    marginHorizontal: 56,
    marginBottom: 128,
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    // lineHeight: 1.5,
    textAlign: "center",
    color: "#fff",
  },
  rectangle: {
    width: 328,
    height: 56,
    alignContent: "center",
    marginHorizontal: 0,
    marginBottom: 0,
    paddingVertical: 16,
    paddingHorizontal: 0,
    borderRadius: 28,
    shadowColor: "#2b2b2b",
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  jetztReisepassAnlegen: {
    width: 328,
    height: 24,
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "normal",
    // lineHeight: 1.33,
    textAlign: "center",
    color: "#2b2b2b",
  },
});
