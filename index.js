// import { registerRootComponent } from 'expo';

// import App from './App';

// // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// // It also ensures that whether you load the app in the Expo client or in a native build,
// // the environment is set up appropriately
// registerRootComponent(App);

import { Navigation } from "react-native-navigation";

import StartScreen from "./screens/StartScreen";
import PopupScreen from "./screens/PopupScreen";
import PopupScreen2 from "./screens/PopupScreen2";

Navigation.registerComponent("StartScreen", () => StartScreen);
Navigation.registerComponent("PopupScreen", () => PopupScreen);
Navigation.registerComponent("PopupScreen2", () => PopupScreen2);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "StartScreen",
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                  animate: false,
                },
              },
            },
          },
        ],
      },
    },
  });
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
      drawBehind: true,
      animate: false,
    },
  });
});
