import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from '../../../styles/style'
import Icon from 'react-native-vector-icons/AntDesign';


const Profile = ({ navigation }: any) => {
  return (
    <>
      <ScrollView>
        <View style={[styles.h100, styles.bgWhite]}>
          <View style={[{ marginLeft: '36%' }, styles.mt1]}>
            <Image style={{ height: 100, width: 100, borderRadius: 100 }} source={require('../../../Assets/myProfilePic.jpeg')} />
          </View>
          <Text style={[styles.mt1, styles.textBlack, { fontSize: 23 }, styles.textBold, styles.textCenter]}>Muhammad Faraz</Text>
          <Text style={[styles.textCenter, styles.fs5, { color: 'grey' }]}>@farazmohammad190</Text>
          <Text onPress={() => navigation.navigate('EditProfile')} style={[styles.textBlack, styles.textCenter, styles.border1, styles.borderPrimary, styles.fs5, styles.p, styles.mt1, { borderRadius: 10, marginLeft: '40%', marginRight: 150 }]}>Edit</Text>
          <View style={[styles.flexRow, styles.my2]}>
            <View>
              <View style={[{ marginLeft: 75 }]}>
                <Icon name="clockcircleo" size={30} color="black" />
              </View>
              <View style={{ marginLeft: 60 }}>
                <Text style={[{ fontSize: 23 }, styles.textBlack, styles.ms2, styles.textBold]}>5</Text>
                <Text style={[{ color: 'grey' }, styles.fs]}>On Going</Text>
              </View>
            </View>
            <View>
              <View style={[{ marginLeft: 101 }]}>
                <Icon name="checksquareo" size={30} color="black" />
              </View>
              <View style={{ marginLeft: 75 }}>
                <Text style={[{ fontSize: 23 }, styles.textBlack, styles.ms3, styles.textBold]}>15</Text>
                <Text style={[{ color: 'grey' }, styles.fs]}>Total Completed</Text>
              </View>
            </View>
          </View>

          <View style={[styles.flexColumn, styles.p2, styles.py]}>
            <TouchableOpacity onPress={() => navigation.navigate('Projects')} style={[styles.flexRow, styles.border1, { padding: 15, paddingTop: 18, borderColor: "darkgrey", borderRadius: 15 }]}>
              <Text style={[styles.textBlack, styles.fs5]}>My Projects</Text>
              <View style={[ { borderColor: 'grey', marginLeft: '57%', borderRadius: 20 }]}>
                <Icon name="arrowright" color="black" size={22} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.mt1, styles.flexRow, styles.border1, { padding: 15, paddingTop: 18, borderColor: "darkgrey", borderRadius: 15 }]}>
              <Text style={[styles.textBlack, styles.fs5]}>Join a Team</Text>
              <View style={[ { borderColor: 'grey', marginLeft: '55%', borderRadius: 20 }]}>
                <Icon name="arrowright" color="black" size={22}  />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={[styles.mt1, styles.flexRow, styles.border1, { padding: 15, paddingTop: 18, borderColor: "darkgrey", borderRadius: 15 }]}>
              <Text style={[styles.textBlack, styles.fs5]}>Settings</Text>
              <View style={[ { borderColor: 'grey', marginLeft: '66.5%', borderRadius: 20 }]}>
                <Icon name="arrowright" color="black" size={22} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.mt1, styles.flexRow, styles.border1, { padding: 15, paddingTop: 18, borderColor: "darkgrey", borderRadius: 15 }]}>
              <Text style={[styles.textBlack, styles.fs5]}>My Task</Text>
              <View style={[ { borderColor: 'grey', marginLeft: '65%', borderRadius: 20 }]}>
                <Icon name="arrowright" color="black" size={22} />
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default Profile