import React from 'react';
import {
    Home,
    Login,
    SignUp,
    Maps,
    NearBy,
    Search,
    Profile,
    Setting
} from './containers';
import { connect } from 'react-redux';

import { BackHandler } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import { setIsConnected } from './stores/modules/network';
import { TabBar } from './components';
import { Colors, Fonts, Icons } from './themes';

const StackNavigatorOptions = {
    headerMode: "none",
    cardStyle: {
        backgroundColor: "white"
    }
};


const HomeExpoler = createMaterialTopTabNavigator(
    {
        All: {
            screen: Maps
        },
        NearBy: {
            screen: NearBy
        }
    },
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#F8F8F8',
            style: {
                backgroundColor: Colors.fire,
            },
            labelStyle: {
                textAlign: 'center',
                fontSize: Fonts.size.input,
                fontFamily: Fonts.lato.semiBold
            },
            indicatorStyle: {
                borderBottomColor: Colors.white,
                borderBottomWidth: 3.5,
            },
        },
    }
);




const HomeTabTopExpoler = createStackNavigator({
    Home: {
        screen: HomeExpoler
    }
}, StackNavigatorOptions);


const SearchExpoler = createStackNavigator({
    Search: {
        screen: Search
    }
}, StackNavigatorOptions);

const ProfileExpoler = createStackNavigator({
    Profile: {
        screen: Profile
    }
}, StackNavigatorOptions);

const SettingExpoler = createStackNavigator({
    Setting: {
        screen: Setting
    }
}, StackNavigatorOptions);


const DashboardExpoler = createBottomTabNavigator({
    Home: {
        screen: HomeTabTopExpoler,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return (
                    <Icons name="home" style={{ color: tintColor }} />
                )
            }
        }
    },
    Search: {
        screen: SearchExpoler,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return (
                    <Icons name="search" style={{ color: tintColor }} />
                )
            }
        }
    },
    profile: {
        screen: ProfileExpoler,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return (
                    <Icons name="person" style={{ color: tintColor }} />
                )
            }
        }
    },
    Menu: {
        screen: SettingExpoler,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return (
                    <Icons name="menu" style={{ color: tintColor }} />
                )
            }
        },
    }
}, {
    tabBarComponent: TabBar,
    tabBarOptions: {
        activeTintColor: "#eeeeee",
        inactiveTintColor: "#222222"
    }
});




const SignUpExpoler = createStackNavigator({
    SignUp: {
        screen: SignUp
    }
}, StackNavigatorOptions);

const LoginExpoler = createStackNavigator({
    Login: {
        screen: Login
    }
}, StackNavigatorOptions);

const ExpolerContainer = createSwitchNavigator(
    {
        Login: {
            screen: LoginExpoler,
        },
        SignUp: {
            screen: SignUpExpoler,
        },
        Home: {
            screen: DashboardExpoler,
        }
    },
    {
        initialRouteName: 'Login'
    });

const AppContainer = createAppContainer(ExpolerContainer);

class App extends React.Component {

    constructor(props) {
        super(props);
        this.exitApp = this.exitApp.bind(this);
    }

    //----------------------------
    // Internet connectivity check
    //----------------------------

    componentDidMount() {

        const dispatchConnected = isConnected => this.props.networkCheck(isConnected);

        NetInfo.isConnected.fetch().then().done(() => {
            NetInfo.isConnected.addEventListener('connectionChange', dispatchConnected);
        });
        BackHandler.addEventListener('hardwareBackPress', this.exitApp);
    }

    exitApp() {
        BackHandler.exitApp()
    }

    // Remove the listener before removing
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.exitApp);
    }

    render() {
        return (
            <AppContainer />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        networkCheck: (isConnected) => {
            dispatch(setIsConnected(isConnected))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(App);