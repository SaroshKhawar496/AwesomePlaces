import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';


class SideDrawer extends Component {
    render() {
        return (
            //Dimensions is a helper method. need the method below to
            //show side-drawer on android
            <View style={{width: Dimensions.get("window").width * 0.8 }}>
                <Text>Side Drawer</Text>
            </View>

        )
    }
}

export default SideDrawer;