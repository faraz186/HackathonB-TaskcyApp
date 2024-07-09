import { Image, ScrollView, Text, TextInput, View } from "react-native"
import styles from "../../../styles/style"
import Icon from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { TouchableOpacity } from "react-native"

function SingleChat({ navigation }: any) {
    return (
        <>
            <View style={[styles.h100, styles.bgWhite]}>
                <View style={[styles.bgPrimary, styles.p1, styles.flexRow, { height: 70 }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={[{ marginTop: 13,marginLeft:5 }]}>
                        <Icon name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>
                    <Image style={{ height: 43, width: 43, borderRadius: 43, marginTop: 4,marginLeft:10 }} source={require('../../../Assets/myProfilePic.jpeg')} />
                    <View style={[styles.flexColumn, styles.ms1]}>
                        <Text style={[styles.textWhite, styles.fs, { marginTop: 5 }]}>Muhammad Faraz</Text>
                        <View style={[styles.flexRow,]}>
                            <Text style={[{ color: 'lightgrey', fontSize: 14.5 }]}>Active now</Text>
                            <View style={[styles.border1, styles.mt, styles.ms, { height: 13, width: 13, backgroundColor: 'lightgreen', borderColor: 'lightgreen', borderRadius: 15 }]}></View>
                        </View>
                    </View>
                </View>
                <ScrollView style={[styles.bgTransparent, styles.h100]}>
                    <View style={[styles.mt, styles.mb]}>
                        <View style={[styles.mb1, styles.bgPrimary, styles.p1, styles.w75, styles.rounded, { marginLeft: '22%', height: "auto" }]}>
                            <Text style={[styles.flexColumn, styles.textWhite]}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod vel neque accusamus quo quam earum, veniam adipisci sequi itaque amet commodi, sed corrupti deserunt quia provident id, aut facere.
                            </Text>
                        </View>
                        <View style={[styles.rounded, styles.mb1, styles.p1, styles.w75, { backgroundColor: 'grey', marginLeft: '3%', height: "auto" }]}>
                            <Text style={[styles.flexColumn, styles.textWhite]}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod vel neque accusamus quo quam earum, veniam adipisci sequi itaque amet commodi, sed corrupti deserunt quia provident id, aut facere.
                            </Text>
                        </View>
                        <View style={[styles.mb1, styles.bgPrimary, styles.p1, styles.w75, styles.rounded, { marginLeft: '22%', height: "auto" }]}>
                            <Text style={[styles.flexColumn, styles.textWhite]}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod vel neque accusamus quo quam earum, veniam adipisci sequi itaque amet commodi, sed corrupti deserunt quia provident id, aut facere.
                            </Text>
                        </View>
                        <View style={[styles.rounded, styles.mb1, styles.p1, styles.w75, { backgroundColor: 'grey', marginLeft: '3%', height: "auto" }]}>
                            <Text style={[styles.flexColumn, styles.textWhite]}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod vel neque accusamus quo quam earum, veniam adipisci sequi itaque amet commodi, sed corrupti deserunt quia provident id, aut facere.
                            </Text>
                        </View>
                        <View style={[styles.rounded, styles.mb1, styles.p1, styles.w75, { backgroundColor: 'grey', marginLeft: '3%', height: "auto" }]}>
                            <Text style={[styles.flexColumn, styles.textWhite]}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod vel neque accusamus quo quam earum, veniam adipisci sequi itaque amet commodi, sed corrupti deserunt quia provident id, aut facere.
                            </Text>
                        </View>
                        <View style={[styles.mb1, styles.bgPrimary, styles.p1, styles.w75, styles.rounded, { marginLeft: '22%', height: "auto" }]}>
                            <Text style={[styles.flexColumn, styles.textWhite]}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod vel neque accusamus quo quam earum, veniam adipisci sequi itaque amet commodi, sed corrupti deserunt quia provident id, aut facere.
                            </Text>
                        </View>
                        <View style={[styles.rounded, styles.mb1, styles.p1, styles.w75, { backgroundColor: 'grey', marginLeft: '3%', height: "auto" }]}>
                            <Text style={[styles.flexColumn, styles.textWhite]}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quod vel neque accusamus quo quam earum, veniam adipisci sequi itaque amet commodi, sed corrupti deserunt quia provident id, aut facere.
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={[styles.bgPrimary, styles.flexRow, styles.p1]}>
                    <TouchableOpacity style={[styles.ms, styles.mt1]}>
                        <MaterialIcons name="add-a-photo" size={30} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.ms1, styles.mt1]}>
                        <MaterialIcons name="photo-library" size={30} color='white' />
                    </TouchableOpacity>
                    <TextInput multiline style={[styles.border1, styles.fs, styles.p1, styles.roundedPill, styles.bgTransparent, styles.ms, { width: 225, borderColor: 'lightgrey', }]} placeholder="Write a Message" placeholderTextColor='white' />
                    <TouchableOpacity style={[styles.ms, styles.mt1]}>
                        <MaterialIcons name="send" size={30} color='white' />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
export default SingleChat