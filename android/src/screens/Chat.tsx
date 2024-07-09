import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../../../styles/style'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Chat = ({ navigation }: any) => {
  return (
    <>
      <View style={[styles.h100, styles.bgWhite, styles.p2]}>
        <TextInput style={[styles.input]} placeholder='Search' placeholderTextColor='grey' />
        <View>

          <TouchableOpacity onPress={() => navigation.navigate('SingleChat')} style={[styles.flexRow, styles.mt3]}>
            <Image style={{ height: 50, width: 50, borderRadius: 50 }} source={require('../../../Assets/myProfilePic.jpeg')} />
            <View style={[styles.border1, styles.mt3, { marginLeft: -15, height: 15, width: 15, backgroundColor: '#00FF00', borderColor: 'lightgreen', borderRadius: 15 }]}></View>
            <View style={[styles.flexColumn, styles.ms1, { marginTop: 5 }]}>
              <Text style={[styles.textBlack]}>Muhammad Faraz</Text>
              <Text style={[{ color: 'darkgrey' }]}>Active now</Text>
            </View>

            <View style={[{ marginLeft: '36.5%', marginTop: 10 }]}>
              <MaterialIcons name='photo-camera' color='darkgrey' size={30} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('SingleChat')} style={[styles.flexRow, styles.mt2]}>
            <Image style={{ height: 50, width: 50, borderRadius: 50 }} source={{ uri: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2stczIxLXNhc2ktMDAxNy1sLWpvYjc4OC5wbmc.png' }} />
            <View style={[styles.border1, styles.mt3, { marginLeft: -15, height: 15, width: 15, backgroundColor: 'darkgrey', borderColor: 'darkgrey', borderRadius: 15 }]}></View>
            <View style={[styles.flexColumn, styles.ms1, { marginTop: 5 }]}>
              <Text style={[styles.textBlack]}>Jame Wilset</Text>
              <Text style={[{ color: 'darkgrey' }]}>Active 2m ago</Text>
            </View>

            <View style={[{ marginLeft: '43.4%', marginTop: 10 }]}>
              <MaterialIcons name='photo-camera' color='darkgrey' size={30} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('SingleChat')} style={[styles.flexRow, styles.mt3]}>
            <Image style={{ height: 50, width: 50, borderRadius: 50 }} source={{ uri: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg' }} />
            <View style={[styles.border1, styles.mt3, { marginLeft: -15, height: 15, width: 15, backgroundColor: '#00FF00', borderColor: 'lightgreen', borderRadius: 15 }]}></View>
            <View style={[styles.flexColumn, styles.ms1, { marginTop: 5 }]}>
              <Text style={[styles.textBlack]}>John Reeves</Text>
              <Text style={[{ color: 'darkgrey' }]}>Active now</Text>
            </View>

            <View style={[{ marginLeft: '46.9%', marginTop: 10 }]}>
              <MaterialIcons name='photo-camera' color='darkgrey' size={30} />
            </View>
            
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('SingleChat')} style={[styles.flexRow, styles.mt2]}>
            <Image style={{ height: 50, width: 50, borderRadius: 50 }} source={{ uri: 'https://png.pngtree.com/png-vector/20231116/ourmid/pngtree-office-worker-with-laptop-png-image_10451263.png' }} />
            <View style={[styles.border1, styles.mt3, { marginLeft: -15, height: 15, width: 15, backgroundColor: 'darkgrey', borderColor: 'darkgrey', borderRadius: 15 }]}></View>
            <View style={[styles.flexColumn, styles.ms1, { marginTop: 5 }]}>
              <Text style={[styles.textBlack]}>Henry Arthur</Text>
              <Text style={[{ color: 'darkgrey' }]}>Active 1h ago</Text>
            </View>


            <View style={[{ marginLeft: '44.5%', marginTop: 10 }]}>
              <MaterialIcons name='photo-camera' color='darkgrey' size={30} />
            </View>

          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Chat