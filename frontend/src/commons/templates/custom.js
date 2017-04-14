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
    }
});