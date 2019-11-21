import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../themes';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    subStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgViewStyle: {
        height: '40%',
        width: '50%'
    },
    imgStyle: {
        height: '100%',
        width: '100%'
    },
    textViewStyle: {
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTextStyle: {
        fontSize: Fonts.size.h5,
        fontFamily: Fonts.lato.semiBold,
        paddingVertical: 2.5,
        color: Colors.bloodOrange
    },
    desTextStyle: {
        fontSize: Fonts.size.medium,
        fontFamily: Fonts.lato.base,
        paddingVertical: 1.5,
        color: Colors.panther
    }
})