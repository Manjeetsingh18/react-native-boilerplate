import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from "react-native";
import posed from "react-native-pose";

import styles from './Style';

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 4;
const SpotLight = posed.View({
    route0: { x: 0 },
    route1: { x: tabWidth },
    route2: { x: tabWidth * 2 },
    route3: { x: tabWidth * 3 }
});

const Scaler = posed.View({
    active: { scale: 1.25 },
    inactive: { scale: 1 }
});


const TabBar = props => {
    const {
        renderIcon,
        activeTintColor,
        inactiveTintColor,
        onTabPress,
        onTabLongPress,
        getAccessibilityLabel,
        navigation
    } = props;

    const { routes, index: activeRouteIndex } = navigation.state;

    return (
        <View style={styles.container}>
            <View style={StyleSheet.absoluteFillObject}>
                <SpotLight style={styles.spotLight} pose={`route${activeRouteIndex}`}>
                    {/* <View style={styles.spotLightInner} /> */}
                </SpotLight>
            </View>

            {routes.map((route, routeIndex) => {
                const isRouteActive = routeIndex === activeRouteIndex;
                const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

                return (
                    <TouchableOpacity
                        key={routeIndex}
                        style={styles.tabButton}
                        onPress={() => {
                            onTabPress({ route });
                        }}
                        onLongPress={() => {
                            onTabLongPress({ route });
                        }}
                        accessibilityLabel={getAccessibilityLabel({ route })}
                    >
                        <Scaler
                            pose={isRouteActive ? "active" : "inactive"}
                            style={styles.scaler}
                        >
                            {renderIcon({ route, focused: isRouteActive, tintColor })}
                        </Scaler>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default TabBar;