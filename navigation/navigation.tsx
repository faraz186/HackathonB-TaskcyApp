import { createNativeStackNavigator } from '@react-navigation/native-stack';   
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';  
import Splash from '../android/src/screens/Splash';   
import styles from '../styles/style';
import SignIn from '../android/src/screens/SignIn';
import Slider1 from '../android/src/screens/Slider1';
import Slider2 from '../android/src/screens/Slider2';
import Slider3 from '../android/src/screens/Slider3';   
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Signup from '../android/src/screens/Signup';      
import TabNavigation from './tabnavigation';   
import Settings from '../android/src/screens/Settings';
import AddTask from '../android/src/screens/AddTask';
import CreateTask from '../android/src/screens/CreateTask';
import CreateTeam from '../android/src/screens/CreateTeam';
import SingleChat from '../android/src/screens/SChat';      
import EditProfile from '../android/src/screens/EditProfile';
import Language from '../android/src/screens/Language';

   
const Navigation = ({ navigation }: any) => {
    const Stack = createNativeStackNavigator()
    const ScreenOptions = {
        headerShown: true,
        headerBackVisible: false,
        headerShadowVisible: false,   
    }
    const Noheader = {
        headerShown: false
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen options={Noheader} name="Splash" component={Splash} />
                <Stack.Screen options={Noheader} name="Slider1" component={Slider1} />
                <Stack.Screen options={Noheader} name="Slider2" component={Slider2} />
                <Stack.Screen options={Noheader} name="Slider3" component={Slider3} />
                <Stack.Screen options={{
                    ...ScreenOptions, headerTitleAlign: "center", headerTitle: "Sign In",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.border1, styles.p, { borderColor: 'lightgrey', borderRadius: 25 }]}>
                         <Icon name="arrowleft" size={25} style={{color:"black"}}/>
                        </TouchableOpacity>
                    )
                }} name="SignIn" component={SignIn} />   


                <Stack.Screen options={{
                    ...ScreenOptions, headerTitleAlign: "center", headerTitle: "Sign Up",   
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Slider3')} style={[styles.border1, styles.p, { borderColor: 'lightgrey', borderRadius: 25 }]}>
                         <Icon name="arrowleft" size={25} style={{color:"black"}}/>
                        </TouchableOpacity>
                    )
                }} name="Signup" component={Signup} />
                <Stack.Screen options={Noheader} name="Home" component={TabNavigation} />
                <Stack.Screen options={{
                    ...ScreenOptions, headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity onPress={()=>navigation.navigate('SignIn')} style={[styles.border1, styles.p, { borderColor: 'grey', borderRadius: 25 }]}>
                            <Icon name='arrowleft' size={20} color="black" />
                        </TouchableOpacity>
                    )
                }} name="Settings" component={Settings} />

                 <Stack.Screen options={{
                    ...ScreenOptions, headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity style={[styles.border1, styles.p, { borderColor: 'grey', borderRadius: 25 }]}>
                            <Icon name='arrowleft' size={20} color="black" />
                        </TouchableOpacity>
                    ),
                    headerTitle: 'Add Task'
                }} name="AddTask" component={AddTask} />
                <Stack.Screen options={{
                    ...ScreenOptions, headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity style={[styles.border1, styles.p, { borderColor: 'grey', borderRadius: 25 }]}>
                            <Icon name='arrowleft' size={20} color="black" />
                        </TouchableOpacity>
                    ),
                    headerTitle: 'Add Task'
                }} name="createTask" component={CreateTask} />
                <Stack.Screen options={{
                    ...ScreenOptions, headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity style={[styles.border1, styles.p, { borderColor: 'grey', borderRadius: 25 }]}>
                            <Icon name='arrowleft' size={20} color="black" />
                        </TouchableOpacity>
                    ),
                    headerTitle: 'Create Team'
                }} name="CreateTeam" component={CreateTeam} />


                <Stack.Screen options={{
                    ...ScreenOptions, headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity style={[styles.border1, styles.p, { borderColor: 'grey', borderRadius: 25 }]}>
                            <Icon name='arrowleft' size={20} color="black" />
                        </TouchableOpacity>
                    )
                }} name="Language" component={Language} />
                
                <Stack.Screen options={{ ...Noheader }} name="SingleChat" component={SingleChat} />

                <Stack.Screen options={{
                    ...ScreenOptions, headerTitleAlign: "center", headerTitle: "Edit Profile",
                    headerLeft: () => (
                        <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={[styles.ms, styles.border1, styles.p, { borderColor: 'darkgrey', borderRadius: 25 }]}>
                            <Icon name='arrowleft' size={18} color="black" />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={[styles.ms2]}>
                            <Text style={[styles.textPrimary, styles.fs]}>Save</Text>
                        </TouchableOpacity>
                    )
                }} name="EditProfile" component={EditProfile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
