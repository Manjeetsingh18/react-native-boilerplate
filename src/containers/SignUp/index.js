import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Content, Input } from "native-base";
import { connect } from 'react-redux';
import { Colors } from "../../themes";
import { validateEmail, Message } from '../../utilities';
import { Toast, DURATION, ActivityIndicator } from '../../libs';

import styles from "./Style";

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName: undefined,
            lastName: undefined,
            email: undefined,
            password: undefined,
            confirmPassword: undefined
        }
    }

    onPressRegistration = () => {
        if (!this.props.network) {
            this.refs.toast.show(Message.network, DURATION.LENGTH_SHORT);
            return;
        }
        if (!this.state.firstName) {
            this.refs.toast.show(Message.firstName, DURATION.LENGTH_SHORT);
            return;
        }
        if (!this.state.lastName) {
            this.refs.toast.show(Message.lastName, DURATION.LENGTH_SHORT);
            return;
        }
        if (!this.state.email) {
            this.refs.toast.show(Message.emailMissing, DURATION.LENGTH_SHORT);
            return;
        }
        if (!this.state.password) {
            this.refs.toast.show(Message.passwordMissing, DURATION.LENGTH_SHORT);
            return;
        }
        if (!this.state.confirmPassword) {
            this.refs.toast.show(Message.confirmPasswordMissing, DURATION.LENGTH_SHORT);
            return;
        }
        if (this.state.password !== this.state.confirmPassword) {
            this.refs.toast.show(Message.confirmMatch, DURATION.LENGTH_SHORT);
            return;
        }
        if (!validateEmail(this.state.email)) {
            this.refs.toast.show(Message.emailInvaild, DURATION.LENGTH_SHORT);
            return;
        }
        if (this.state.firstName && this.state.lastName && this.state.email && this.state.password && this.state.confirmPassword) {

            let query = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            }
            console.log("query ==>>", query);
            // this.props.login(query);
        }
    }


    onPressAlreadyAccount = () => {
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <Container>
                <Content>
                    <View style={styles.registerViewStyle}>
                        <View style={styles.formViewStyle}>
                            <Input
                                autoCorrect={false}
                                onChangeText={(text) =>
                                    this.setState({ firstName: text })
                                }
                                onSubmitEditing={(event) => {
                                    this._lastName._root.focus()
                                }}
                                ref={(input) => this._username = input}
                                value={this.state.firstName}
                                returnKeyType={'next'}
                                autoCapitalize={'none'}
                                placeholder={'First Name'}
                                underlineColorAndroid={"transparent"}
                                style={styles.inputStyle} />
                            <Input
                                autoCorrect={false}
                                onChangeText={(text) =>
                                    this.setState({ lastName: text })
                                }
                                onSubmitEditing={(event) => {
                                    this._email._root.focus()
                                }}
                                value={this.state.lastName}
                                autoCapitalize={'none'}
                                returnKeyType={'next'}
                                placeholder={'Last Name'}
                                underlineColorAndroid={"transparent"}
                                ref={(input) => this._lastName = input}
                                style={styles.inputStyle} />
                            <Input
                                autoCorrect={false}
                                onChangeText={(text) =>
                                    this.setState({ email: text })
                                }
                                onSubmitEditing={(event) => {
                                    this._password._root.focus()
                                }}
                                ref={(input) => this._email = input}
                                value={this.state.email}
                                placeholder={'Email'}
                                returnKeyType={'next'}
                                autoCapitalize={'none'}
                                keyboardType={'email-address'}
                                underlineColorAndroid={"transparent"}
                                style={styles.inputStyle} />
                            <Input
                                autoCorrect={false}
                                secureTextEntry={true}
                                onChangeText={(text) =>
                                    this.setState({ password: text })
                                }
                                onSubmitEditing={(event) => {
                                    this._conformPassword._root.focus()
                                }}
                                ref={(input) => this._password = input}
                                value={this.state.password}
                                returnKeyType={'next'}
                                autoCapitalize={'none'}
                                autoCorrect={true}
                                placeholder={'Password'}
                                underlineColorAndroid={"transparent"}
                                style={styles.inputStyle} />
                            <Input
                                autoCorrect={true}
                                secureTextEntry={true}
                                onChangeText={(text) =>
                                    this.setState({ confirmPassword: text })
                                }
                                onSubmitEditing={(event) => {
                                    this.onPressRegistration()
                                }}
                                value={this.state.confirmPassword}
                                ref={(input) => this._conformPassword = input}
                                returnKeyType={'go'}
                                autoCapitalize={'none'}
                                placeholder={'Confirm Password'}
                                underlineColorAndroid={"transparent"}
                                style={styles.inputStyle} />
                        </View>
                        <View style={styles.buttonViewStyle}>
                            <TouchableOpacity
                                style={styles.registerButtonStyle}
                                onPress={() => this.onPressRegistration()}>
                                <Text style={styles.registerTextStyle}>Registration</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.alreadyAccountStyle}
                                onPress={() => this.onPressAlreadyAccount()}>
                                <Text style={styles.alreadyTextStyle}>If you've already account.</Text>
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

const mapStateToProps = state => {
    return {
        network: state.network.isConnected
    }
}

// const mapDispatchToProps = dispatch => ({

// });

export default connect(mapStateToProps, null)(SignUp);