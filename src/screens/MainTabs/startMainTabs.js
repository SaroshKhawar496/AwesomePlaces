import {Navigation} from 'react-native-navigation';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



const startTabs = () => {
    Promise.all([
        //all method takes array of promises and waits for them to resolve 
        //Checking platform to load different icons
        Icon.getImageSource(Platform.OS === "android" ? "md-map" : "ios-map" , 30),
        Icon.getImageSource(Platform.OS === "android" ? "md-share-alt" : "ios-share", 30),
        Icon.getImageSource(Platform.OS === "android" ? "md-menu": "ios-menu", 30)
    ]).then(sources => {

        Navigation.startTabBasedApp({
            tabs: [
                // need to register any buttons you want to show up in the tabs below!
                {
                    //screens are registerd in App.js and can be used here then
                    screen: "awesome-places.FindPlaceScreen",
                    label: "Find Place", //on the Tab
                    title: "Find Place", //on the Toolbar
                    icon: sources[0],
                    navigatorButtons: {
                        //array of buttons where each button is javascript object
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
        
                },
                {
                    //screens are registerd in App.js and can be used here then
                    screen:"awesome-places.SharePlaceScreen",
                    label: "Share Place", //on the Tab
                    title: "Share Place", //on the Toolbar
                    icon: sources[1],
                    navigatorButtons: {
                        //array of buttons where each button is javascript object
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }        
                }
            ],
            tabsStyle: {
                tabBarSelectedButtonColor: "orange"
            },
            appStyle: {
                tabBarSelectedButtonColor: "orange"
            },
            drawer: {
                left: {
                    screen: "awesome-places.SideDrawer"
                }
            }
        });   
    })
}


export default startTabs;

