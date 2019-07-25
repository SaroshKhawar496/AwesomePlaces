import React, {Component} from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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

                <TouchableOpacity>
                    <View style={styles.drawerItem}>
                        <Icon 
                        name="ios-log-out"
                        size={30}
                        color="#aaa"
                        style={styles.drawerItemIcon}
                        />
                        <Text>Sign Out</Text>
                    </View>
                </TouchableOpacity>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: "white",
        flex: 1 //takes full available space
    },
    drawerItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#eee"
    }, 
    drawerItemIcon: {
        marginRight: 10
    }
})

export default SideDrawer;