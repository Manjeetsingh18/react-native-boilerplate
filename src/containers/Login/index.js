import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Container, Content, Input } from "native-base";
import { connect } from 'react-redux';


import { Network } from '../../components';
import { Icons, Colors } from "../../themes";
import { validateEmail, Message } from '../../utilities';
import { Toast, DURATION, ActivityIndicator } from '../../libs';
import styles from "./Style";

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            email: undefined,
            password: undefined
        }
    }

    onPressTouchId = () => {

    }

    onPressLogin = () => {
        if (!this.props.network) {
            this.refs.toast.show(Message.network, DURATION.LENGTH_SHORT);
            return;
        }
        if (!this.state.email) {
            this.refs.toast.show(Message.emailMissing, DURATION.LENGTH_SHORT);
            return;
        }
        if (!validateEmail(this.state.email)) {
            this.refs.toast.show(Message.emailInvaild, DURATION.LENGTH_SHORT);
            return;
        }
        if (!this.state.password) {
            this.refs.toast.show(Message.passwordMissing, DURATION.LENGTH_SHORT);
            return;
        }
        if (this.state.email && this.state.password) {
            let query = {
                email: this.state.email,
                password: this.state.password
            }
            console.log("query ==>>", query);
            // this.props.login(query);
            this.props.navigation.navigate('Home');
        }
    }

    onPressNewUser = () => {
        this.props.navigation.navigate('SignUp');
    }

    render() {
        if (!this.props.network) {
            return (
                <Network />
            )
        } else {
            return (
                <Container style={styles.conatiner}>
                    <Content>
                        <View style={styles.loginViewStyle}>
                            <Input
                                placeholder={'Email'}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                returnKeyType={'next'}
                                ref={(input) => this._username = input}
                                style={styles.inputStyle}
                                keyboardType={'email-address'}
                                onChangeText={(text) =>
                                    this.setState({ email: text })
                                }
                                onSubmitEditing={(event) => {
                                    this._password._root.focus()
                                }} />

                            <Input
                                placeholder={'Password'}
                                autoCorrect={false}
                                secureTextEntry={true}
                                style={styles.inputStyle}
                                returnKeyType={'go'}
                                ref={(input) => this._password = input}
                                onChangeText={(text) =>
                                    this.setState({ password: text })
                                }
                                onSubmitEditing={() => {
                                    this.onPressLogin()
                                }} />

                            <View style={styles.buttonViewStyle}>

                                <TouchableOpacity
                                    style={styles.touchButtonStyle}
                                    onPress={() => this.onPressTouchId()}>
                                    <Icons name={'finger-print'} style={styles.touchIconStyle} />
                                    <Text style={styles.touchTextStyle}>Login with Touch ID</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.loginButtonStyle}
                                    onPress={() => this.onPressLogin()}>
                                    <Text style={styles.loginTextStyle}>Login</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.newUserButtonStyle}
                                    onPress={() => this.onPressNewUser()}>
                                    <Text style={styles.newUserTextStyle}>If you new user.</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </Content>
                    <Toast
                        ref="toast"
                        style={{ backgroundColor: Colors.charcoal }}
                        fadeOutDuration={1000}
                        opacity={0.8}
                        textStyle={{ color: Colors.white }}
                    />
                </Container>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        network: state.network.isConnected
    }
}

// const mapDispatchToProps = dispatch => ({

// });

export default connect(mapStateToProps, null)(Login);