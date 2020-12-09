import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Navigation } from "react-native-navigation";

export default PopupScreen2 = (props) => {
  const closePopup = () => {
    Navigation.popToRoot(props.componentId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.popupContainer}>
        <TouchableOpacity onPress={() => closePopup()}>
          <Image
            source={require("../assets/dark-transparent.png")}
            style={styles.closePopup}
          />
        </TouchableOpacity>
        <View style={styles.astronautLogo}>
          <Image
            source={require("../assets/standing.png")}
            style={styles.standing}
          />
        </View>
        <Text style={styles.deinReisepassWirdErstellt}>Los geht's ...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#18334a",
  },
  popupContainer: {
    width: 328,
    height: 592,
    paddingTop: 16,
    paddingRight: 9,
    paddingBottom: 192,
    paddingLeft: 7,
    borderRadius: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "#fff",
  },
  closePopup: {
    width: 40,
    height: 40,
    marginTop: 0,
    marginRight: 7,
    marginBottom: 156,
    marginLeft: 272,
    resizeMode: "contain",
  },
  astronautLogo: {
    width: 104,
    height: 104,
    marginRight: 56,
    marginBottom: 20,
    marginLeft: 105,
    paddingTop: 8,
    borderRadius: 24,
    backgroundColor: "#83d2fa",
  },
  standing: {
    resizeMode: "contain",
  },
  deinReisepassWirdErstellt: {
    width: 312,
    height: 64,
    fontFamily: "Poppins-Regular",
    fontSize: 28,
    fontWeight: "800",
    fontStyle: "normal",
    textAlign: "center",
    color: "#2b2b2b",
  },
});
