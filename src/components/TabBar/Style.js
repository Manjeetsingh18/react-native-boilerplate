import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 4;
export default StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 52,
        elevation: 2,
        alignItems: "center"
    },
    tabButton: {
        flex: 1
    },
    spotLight: {
        width: tabWidth,
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: 8
    },
    // spotLightInner: {
    //     width: 48,
    //     height: 48,
    //     backgroundColor: "#ee0000",
    //     borderRadius: 24
    // },
    scaler: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
