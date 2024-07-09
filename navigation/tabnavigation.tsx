import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../styles/style';
import Home from '../android/src/screens/Home';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Chat from '../android/src/screens/Chat';
import Profile from '../android/src/screens/Profile';
import Projects from '../android/src/screens/Project';


function TabNavigation({ navigation }: any) {
    const Tab = createBottomTabNavigator()
    return (
        <>
            <Tab.Navigator
                initialRouteName='Homes'
                screenOptions={{
                    tabBarActiveTintColor:"#6f6aee",
                    tabBarShowLabel: false,
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: { 
                        position: 'relative',
                        backgroundColor: "white",
                        left: 2,
                        right: 2,
                        bottom: 1,
                        borderRadius: 10,
                        elevation: 0,
                        height: 60,
                        ...styles.shadow3,
                        

                    }
                }}
            >
                <Tab.Screen name="Homes" component={Home}
                    options={{
                        headerShown: true,
                        headerTitleAlign: "center",
                        headerShadowVisible: false,
                        headerTitle: "Sunday, 7",
                        headerTitleStyle: {
                            backgroundColor: 'white',
                        },
                        headerLeft: () => (
                            <View style={[styles.ms2, styles.border1, styles.p, { borderColor: 'darkgrey', borderRadius: 25 }]}>
                                <Icon onPress={()=>navigation.navigate('Settings')} size={20} name='settings' />
                            </View>
                        ),
                        headerRight: () => (
                            <View style={[styles.me2, styles.border1, styles.p, { borderColor: 'darkgrey', borderRadius: 25 }]}>
                               <EvilIcons size={25} name='bell' />
                            </View>
                        ),
                        tabBarIcon: ({color}) => (
                            <View>
                                <View style={[{ marginLeft: 3 }]}>
                                  <AntDesign color={color} size={23} name='home' />
                                </View>
                            </View>
                        )
                    }}
                />
                <Tab.Screen name="Project" component={Projects}
                    options={{
                        headerTitleStyle: {
                            backgroundColor: 'white',
                        },
                        headerTitleAlign: "center",
                        headerLeft: () => (
                            <View style={[styles.ms2, styles.border1, styles.p, { borderColor: 'darkgrey', borderRadius: 25 }]}>
                                <AntDesign name='arrowleft' size={19} color="black" />
                            </View>
                        ),
                        headerRight: () => (
                            <View style={[styles.me2, styles.border1, styles.p, { borderColor: 'darkgrey', borderRadius: 25 }]}>
                                <AntDesign name='plus' size={23} color="black" />
                            </View>
                        ),
                       
                        tabBarIcon: ({color}) => (
                            <View>
                                <View style={[{ marginLeft: 3 }]}>
                                  <AntDesign color={color} size={23} name='folder1' />
                                </View>
                            </View>
                        )
                    }}
                />
                <Tab.Screen name="homeIcon" component={Home}
                    options={{
                        headerShown: true,
                        headerTitleAlign: "center",
                        headerShadowVisible: false,
                        headerTitle: "Friday, 26",
                        headerTitleStyle: {
                            backgroundColor: 'white',
                        },
                       
                        tabBarIcon: ({color}) => (
                            <View>
                                <View style={[{ marginLeft: 3 }]}>
                                  <AntDesign style={{backgroundColor:"#6f6aee",borderRadius:50,padding:1,color:"white"}} 
                                  color={color} size={40} onPress={()=>navigation.navigate('AddTask')} name='pluscircleo' />
                                </View>
                            </View>
                        )
                    }}
                />
               <Tab.Screen name="Chat" component={Chat}
                    options={{
                        headerShown: true,
                        headerTitleAlign: "center",
                        headerShadowVisible: false,
                        headerTitle: "Chat",
                        headerTitleStyle: {
                            backgroundColor: 'white',
                        },
                       headerLeft: () => (
                            <View style={[styles.ms2, styles.border1, styles.p, { borderColor: 'darkgrey', borderRadius: 25 }]}>
                                <AntDesign name='arrowleft' size={19} color="black" />
                            </View>
                        ),
                        headerRight: () => (
                            <View style={[styles.me2, styles.border1, styles.p, { borderColor: 'darkgrey', borderRadius: 25 }]}>
                                <AntDesign name='plus' size={23} color="black" />
                            </View>
                        ),
                        tabBarIcon: ({color}) => (
                            <View>
                                <View style={[{ marginLeft: 3 }]}>
                                  <AntDesign  color={color} size={23} name='message1' />
                                </View>
                            </View>
                        )
                    }}
                />
                <Tab.Screen name="Profile" component={Profile}
                    options={{
                        headerTitleStyle: {
                            backgroundColor: 'white',
                        },
                        headerLeft: () => (
                            <View style={[styles.ms2, styles.border1, styles.p, { borderColor: 'darkgrey', borderRadius: 25 }]}>
                                <AntDesign name='arrowleft' size={19} />
                            </View>
                        ),
                        headerTitleAlign: "center",
                        tabBarIcon: ({color}) => (
                            <View>
                                <View style={[{ marginLeft: 3 }]}>
                                  <AntDesign color={color} size={23} name='user' />
                                </View>
                            </View>
                        )
                    }}
                />
            </Tab.Navigator>
        </>
    )
}
export default TabNavigation