import { StyleSheet } from "react-native";
import { Metrics, Fonts, Colors } from '../../themes';

export default StyleSheet.create({
    conatiner: {
        flex: 1
    },
    registerViewStyle: {
        marginTop: Metrics.screenHeight / 2
    },
    formViewStyle: { 
        width: '98%', 
        alignSelf: 'flex-end' 
    },
    inputStyle: {
        borderBottomColor: Colors.charcoal,
        borderBottomWidth: 0.5
    },
    buttonViewStyle: { 
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    registerButtonStyle: {
        height: 45,
        width: '50%',
        marginVertical: 7.5,
        borderRadius: 7.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.bloodOrange
    },
    registerTextStyle: { 
        color: Colors.white, 
        fontSize: Fonts.size.h6, 
        fontFamily: Fonts.lato.medium 
    },
    alreadyAccountStyle: { 
        height: 45, 
        width: "80%", 
        marginVertical: 2.5, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    alreadyTextStyle: { 
        color: Colors.bloodOrange, 
        fontSize: Fonts.size.regular, 
        fontFamily: Fonts.lato.medium 
    },
})