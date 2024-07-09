import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../../../styles/style';
import {Image} from 'react-native';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';

function SignIn({navigation}: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User Login successful!');
        navigation.navigate('Home');
      })

      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
          navigation.navigate('Home');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }
        
        console.error('error');
        
      });
  };


  return (
    <>
      <View style={[styles.bgWhite, styles.p2, styles.h100]}>
        <Text
          style={[styles.fs2, styles.mt, styles.textBlack, styles.textBold]}>
          Welcome Back!
        </Text>
        <Text
          style={[
            styles.mt1,
            {color: 'grey', lineHeight: 23, fontSize: 16, width: 240},
          ]}>
          Please Enter your Email address and Password for Login
        </Text>
        <TextInput
          value={email}
          onChangeText={e => setEmail(e)}
          style={[
            styles.mt3,
            styles.p1,
            styles.border1,
            {
              width: '98%',
              borderRadius: 16,
              borderColor: 'lightgrey',
              fontSize: 16.2,
              color: 'black',
            },
          ]}
          placeholder="Enter your email"
          placeholderTextColor="#A9A9A9"
        />
        <TextInput
          value={password}
          onChangeText={e => setPassword(e)}
          style={[
            styles.mt2,
            styles.p1,
            styles.border1,
            {
              width: '98%',
              borderRadius: 16,
              borderColor: 'lightgrey',
              fontSize: 16.2,
              color: 'black',
            },
          ]}
          placeholder="Enter your password"
          placeholderTextColor="#A9A9A9"
        />
        <Text
          style={[
            styles.mt2,
            styles.mb1,
            {color: '#191970', fontWeight: 400, marginLeft: 180, fontSize: 16},
          ]}>
          Forgot password?
        </Text>

        <TouchableOpacity onPress={loginUser}>
          <Text
            style={[
              styles.textCenter,
              styles.bgPrimary,
              {
                marginTop: 10,
                fontSize: 17,
                color: 'white',
                padding: 13,
                borderRadius: 10,
              },
            ]}>
            Sign in
          </Text>
        </TouchableOpacity>

        <View style={[styles.my4, styles.flexRow]}>
          <TouchableOpacity
            style={[
              styles.border1,
              {
                marginLeft: 90,
                borderRadius: 15,
                width: '17%',
                borderColor: 'lightgrey',
              },
            ]}>
            <Image
              style={[{marginLeft: -3.2, height: 60, width: 60}]}
              source={{
                uri: 'https://support.bluebeam.com/wp-content/uploads/2016/04/apple_logo_4096x4096_black.png',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.border1,
              {
                marginLeft: 40,
                borderRadius: 15,
                width: '17%',
                borderColor: 'lightgrey',
              },
            ]}>
            <Image
              style={[{marginLeft: -3, height: 60, width: 60}]}
              source={{
                uri: 'https://i1.wp.com/www.teguhonline7.com/wp-content/uploads/2016/07/google-icon.png?fit=1125%2C1125',
              }}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            marginTop: 5,
            color: 'grey',
            fontSize: 18,
            textAlign: 'center',
          }}>
          Not Registered Yet?
          <Text
            onPress={() => navigation.navigate('Signup')}
            style={[
              styles.textPrimary,
              {fontWeight: 'bold', fontSize: 18, textAlign: 'center'},
            ]}>
            {' '}
            Sign Up
          </Text>
        </Text>
      </View>
    </>
  );
}
export default SignIn;
