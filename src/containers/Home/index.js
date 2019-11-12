import React from 'react';
import { View } from 'react-native';
import { Container, Content, Text } from "native-base";

import styles from "./Style";

export default class Home extends React.Component {
    
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text>{'Hello'}</Text>
                </Content>
            </Container>
        )
    }
}