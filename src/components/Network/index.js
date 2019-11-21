import React from 'react';
import { Container } from 'native-base';
import { View, Text, Image } from 'react-native';
import { Images } from '../../themes';

import styles from './Style';

const Network = () => {

    return (
        <Container style={styles.container}>
            <View style={styles.subStyle}>
                <View style={styles.imgViewStyle}>
                    <Image
                        resizeMode={'contain'}
                        source={Images.warning}
                        style={styles.imgStyle} />
                </View>
                <View style={styles.textViewStyle}>
                    <Text style={styles.headerTextStyle}>Check your connection.</Text>
                    <Text style={styles.desTextStyle}>You don't seem to have an active internet connection.</Text>
                    <Text style={styles.desTextStyle}>Please check your connection and try again.</Text>
                </View>
            </View>
        </Container>
    )
}

export default Network