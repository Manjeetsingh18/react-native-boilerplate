import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Container, Content } from 'native-base';

export default class Profile extends React.Component {

    render() {
        return (
            <Container>
                <Content>
                    <View>
                        <Text>Profile</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}
