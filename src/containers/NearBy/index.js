import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { Container, Content } from 'native-base';

import { Colors, Fonts, Metrics, Icons } from '../../themes';
import { Message } from '../../utilities';
import { Toast, DURATION, ActivityIndicator } from '../../libs';

export default class NearBy extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text>NearBy</Text>
                </Content>
            </Container>
        )
    }
}