import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../themes";


export default StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: Colors.background
    },
    loginViewStyle: {
        marginTop: Metrics.screenHeight / 1.75
    },
    inputStyle: {
        width: '98%',
        alignSelf: 'flex-end',
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.charcoal
    },
    buttonViewStyle: {
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchButtonStyle: {
        width: '50%',
        height: 45,
        marginVertical: 7.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchTextStyle: {
        paddingHorizontal: 7.5,
        fontFamily: Fonts.lato.semiBold,
        color: Colors.bloodOrange,
        fontSize: Fonts.size.h6
    },
    touchIconStyle: { 
        color: Colors.bloodOrange, 
        fontSize: Metrics.icons.medium 
    },
    loginButtonStyle: {
        width: '50%',
        height: 45,
        marginVertical: 7.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7.5,
        backgroundColor: Colors.bloodOrange
    },
    loginTextStyle: {
        fontFamily: Fonts.lato.semiBold,
        color: Colors.white,
        fontSize: Fonts.size.h6
    },
    newUserButtonStyle: {
        width: '80%',
        height: 45,
        marginVertical: 2.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    newUserTextStyle: {
        fontFamily: Fonts.lato.semiBold,
        color: Colors.charcoal,
        fontSize: Fonts.size.h6
    }
})