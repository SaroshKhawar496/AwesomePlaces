import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';


class SideDrawer extends Component {
    render() {
        return (
            //Dimensions is a helper method. need the method below to
            //show side-drawer on android
            <View 
            //merging styles using array
                style={[styles.container,
                    {width: Dimensions.get("window").width * 0.8 }
                ]}>
                <Text>Side Drawer</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: "white",
        flex: 1 //takes full available space
    }
})

export default SideDrawer;