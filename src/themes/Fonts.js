import { Dimensions, Platform, PixelRatio } from 'react-native';
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

const lato = {
    ...Platform.select({
        ios: {
            base: 'Lato-Regular',
            bold: 'Lato-Bold',
            emphasis: 'Lato-Italic',
            heavy: 'Lato-Heavy',
            light: 'Lato-Light',
            medium: 'Lato-Medium',
            semiBold: 'Lato-Semibold',
            thin: 'Lato-Thin',
        },
        android: {
            base: 'Lato-Regular',
            bold: 'Lato-Bold',
            emphasis: 'Lato-Italic',
            heavy: 'Lato-Heavy',
            light: 'Lato-Light',
            medium: 'Lato-Medium',
            semiBold: 'Lato-Semibold',
            thin: 'Lato-Thin'
        }
    })
};

const normalize = (size) => {
    if (pixelRatio == 2) {
        if (SCREEN_WIDTH >= 375) {
            return size * (Platform.OS === 'ios' ? 1 : 1);
        }
        return size * (Platform.OS === 'ios' ? 0.9 : 9);
    }
    if (pixelRatio == 3) {
        return size * (Platform.OS === 'ios' ? 1 : 1);
    }
    return size;
};

const size = {
    h1: normalize(38),
    h2: normalize(34),
    h3: normalize(30),
    h4: normalize(26),
    h5: normalize(20),
    h6: normalize(18),
    input: normalize(18),
    regular: normalize(17),
    medium: normalize(14),
    small: normalize(12),
    semismall: 8.5,
};

const style = {
    regularFont: {
        fontFamily: lato.base,
        fontSize: size.h6,
    }
};

export default {
    lato,
    size,
    style
}