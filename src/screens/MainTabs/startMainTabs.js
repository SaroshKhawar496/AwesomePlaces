import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';



const startTabs = () => {
    Promise.all([
        //all method takes array of promises and waits for them to resolve 
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("ios-share-alt", 30),
        Icon.getImageSource("ios-menu", 30)
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
                                title: "Menu"
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
                                title: "Menu"
                            }
                        ]
                    }        
                }
            ],
            drawer: {
                left: {
                    screen: "awesome-places.SideDrawer"
                }
            }
        });   
    })
}


export default startTabs;

