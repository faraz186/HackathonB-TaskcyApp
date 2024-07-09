import React from 'react'
import { Text, TouchableOpacity, View,ScrollView } from 'react-native'
import styles from '../../../styles/style'
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const AddTask = ({ navigation }: any) => {
  return (
    <ScrollView>
      <View style={[styles.h100, styles.bgLight]}>
        <View>
          <View style={[styles.bgWhite, styles.borderTop1, styles.borderLeft1, styles.borderRight1, styles.h80, { marginTop: '80%', borderColor: 'lightgrey', borderTopLeftRadius: 40, borderTopRightRadius: 40 }]}>
            <View style={[styles.flexColumn, styles.mt2, styles.p2]}>
              <TouchableOpacity onPress={() => navigation.navigate('createTask')} style={[styles.flexRow, styles.border1, styles.mt1, { padding: 15, paddingTop: 18, borderColor: "lightgrey", borderRadius: 15 }]}>
                <View style={[styles.mx]}>
                  <Ionicons name="create-outline" color="black" size={25} />
                </View>
                <Text style={[styles.textBlack, styles.fs5]}>Create Task</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Project')} style={[styles.mt1, styles.flexRow, styles.border1, { padding: 15, paddingTop: 18, borderColor: "lightgrey", borderRadius: 15 }]}>
                <View style={[styles.mx]}>
                  <Octicons name="project" color="black" size={25} />
                </View>
                <Text style={[styles.textBlack, styles.fs5]}> Create Project</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('CreateTeam')} style={[styles.mt1, styles.flexRow, styles.border1, { padding: 15, paddingTop: 18, borderColor: "lightgrey", borderRadius: 15 }]}>
                <View style={[styles.mx]}>
                  <Icon name="team" color="black" size={28} />
                </View>
                <Text style={[styles.textBlack, styles.fs5]}>Create Team</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Projects')} style={[styles.mt1, styles.flexRow, styles.border1, { padding: 15, paddingTop: 18, borderColor: "lightgrey", borderRadius: 15 }]}>
                <View style={[styles.mx]}>
                  <MaterialIcons name='event-available' color="black" size={28} />
                </View>
                <Text style={[styles.textBlack, styles.fs5]}>Create Event</Text>
              </TouchableOpacity>
              
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Homes')} style={[styles.bgPrimary, styles.roundedPill, styles.p1, { marginTop: -5, height: 50, width: 50, marginLeft: '42%' }]}>
              <Icon onPress={()=>navigation.navigate('Homes')} name='close' size={30} color="white" />
            </TouchableOpacity >
          </View>

        </View>
      </View>
</ScrollView>
  )
}

export default AddTask