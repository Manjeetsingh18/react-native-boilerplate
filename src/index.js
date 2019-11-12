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

import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';

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

const HomeTabsExpoler = createBottomTabNavigator({
    Home: {
        screen: HomeTabTopExpoler,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icons name="home" color={tintColor} />
        }
    },
    Search: {
        screen: SearchExpoler,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icons name="search" color={tintColor} />
        }
    },
    profile: {
        screen: ProfileExpoler,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icons name="person" color={tintColor} />
        }
    },
    Menu: {
        screen: SettingExpoler,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icons name="menu" color={tintColor} />
        }
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

const App = createSwitchNavigator(
    {
        Login: {
            screen: LoginExpoler,
        },
        SignUp: {
            screen: SignUpExpoler,
        },
        Home: {
            screen: HomeTabsExpoler,
        }
    },
    {
        initialRouteName: 'Login'
    });

export default createAppContainer(App);