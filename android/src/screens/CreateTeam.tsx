import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../../../styles/style'
import Icon from 'react-native-vector-icons/AntDesign'


const CreateTeam = () => {
    return (
        <View style={[styles.h100, styles.bgWhite, styles.p2]}>
            <View style={[styles.my1]}>
                <Image style={{ height: 150, width: 150, marginLeft: 80, borderRadius: 150 }} source={{ uri: 'https://www.simplewebsite.fr/blog/wp-content/uploads/2020/05/69ca4ea5753c897ba260e55c368612ea.png' }} />
                <Text style={[styles.fs4, styles.textBlack, styles.mt, styles.textCenter]}>Upload Logo File</Text>
                <Text style={[styles.fs, styles.mt, styles.textCenter, { color: 'grey' }]}>Your Logo will publish always</Text>
            </View>
            <View style={[styles.my1]}>
                <Text style={[styles.textBlack, styles.fs, { color: 'grey' }]}>Task Name</Text>
                <TextInput style={[styles.border1, styles.rounded, styles.p1, styles.my1, { fontSize:17,borderColor: 'darkgrey' }]} placeholderTextColor="lightgrey" placeholder='Mobile Application Design' />
            </View>
            <View>
                <Text style={[styles.textBlack, styles.fs, { color: 'grey' }]}>Team Member</Text>
                <View style={[styles.flexRow, styles.my1]}>
                    <Image style={{ height: 50, width: 50, borderRadius: 50 }} source={{ uri: 'data:image/jpeg;base64,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' }} />
                    <Image style={{ height: 50, width: 50, borderRadius: 50, marginLeft: 5 }} source={{ uri: 'https://png.pngtree.com/png-vector/20231116/ourmid/pngtree-office-worker-with-laptop-png-image_10451263.png' }} />
                    <Image style={{ height: 50, width: 50, borderRadius: 50, marginLeft: 5 }} source={{ uri: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg' }} />
                    <Image style={{ height: 50, width: 50, borderRadius: 50, marginLeft: 5 }} source={{ uri: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2stczIxLXNhc2ktMDAxNy1sLWpvYjc4OC5wbmc.png' }} />
                    <View style={[styles.border1, styles.borderPrimary, styles.ms1, styles.roundedPill, { height: 50, width: 50, padding: 8 }]}>
                        <Icon name="plus" size={30} />
                    </View>
                </View>
            </View>
            <View>
                <Text style={[styles.textBlack, styles.fs, { color: 'grey' }]}>Type</Text>
                <View style={[styles.flexRow]}>
                    <View style={[styles.border1, styles.p1, styles.rounded, styles.my1, styles.ms1, { borderColor: 'grey' }]}><Text style={[styles.textBlack, styles.fs]}>Urgent</Text></View>
                    <View style={[styles.border1, styles.p1, styles.rounded, styles.my1, styles.ms3, { borderColor: 'grey' }]}><Text style={[styles.textBlack, styles.fs]}>Running</Text></View>
                    <View style={[styles.border1, styles.p1, styles.rounded, styles.my1, styles.ms3, { borderColor: 'grey' }]}><Text style={[styles.textBlack, styles.fs]}>Outgoing</Text></View>
                </View>
            </View>
            <TouchableOpacity style={[styles.rounded, styles.p1, styles.bgPrimary, styles.mx4, styles.shadow5, styles.mt3, { shadowColor: '#6f6aee' }]}>
                <Text style={[styles.textWhite, styles.textBold, styles.fs5, styles.textCenter]}>Create Team</Text>
            </TouchableOpacity>
        </View>

    )
}

export default CreateTeam