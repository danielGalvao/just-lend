import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "paddingTop": 70
    },
    "hero-spacer": {
        "marginTop": 50
    },
    "hero-feature": {
        "marginBottom": 30
    },
    "footer": {
        "marginTop": 50,
        "marginRight": 0,
        "marginBottom": 50,
        "marginLeft": 0
    },
    "navbar-collapse navbar-custom-menu": {
        "float": "right"
    },
    "navbar-collapse navbar-custom-menu li user-image": {
        "width": 20,
        "marginRight": 5,
        "borderRadius": "100%"
    },
    "user-menu user-header": {
        "textAlign": "center"
    },
    "user-menu user-header p > small": {
        "display": "block"
    },
    "dropdown-menu": {
        "paddingTop": "10%",
        "paddingRight": "10%",
        "paddingBottom": "10%",
        "paddingLeft": "10%"
    }
});