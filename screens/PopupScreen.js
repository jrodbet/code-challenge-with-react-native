import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Easing,
} from "react-native";
import { Navigation } from "react-native-navigation";
import Animated from "react-native-reanimated";

export default PopupScreen = (props) => {
  let animation = new Animated.Value(0);

  // Close popUpScreen and return to StartScreen
  const closePopup = () => {
    Navigation.popToRoot(props.componentId);
  };

  // Navigate to PopupScreen2 after 5 seconds
  setTimeout(() => {
    Navigation.push(props.componentId, {
      component: {
        name: "PopupScreen2",
      },
    });
  }, 5000);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [props]);

  const animate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animatedStyles = {
    transform: [{ rotate: animate }],
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
        <Animated.Image
          source={require("../assets/passport.png")}
          style={[styles.passport, animatedStyles]}
        />
        <Text style={styles.deinReisepassWirdErstellt}>
          Dein Reisepass wird erstellt
        </Text>
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
    marginBottom: 152,
    marginLeft: 272,
    resizeMode: "contain",
  },
  passport: {
    width: 152,
    height: 112,
    marginRight: 33,
    marginBottom: 16,
    marginLeft: 80,
    resizeMode: "contain",
  },
  deinReisepassWirdErstellt: {
    width: 312,
    height: 84,
    fontFamily: "Poppins-Regular",
    fontSize: 28,
    fontWeight: "800",
    fontStyle: "normal",
    textAlign: "center",
    color: "#2b2b2b",
  },
});
