import { Switch, TouchableOpacity, View } from "react-native"
import styles from "../../../styles/style"
import { Text } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign'

function Settings({ navigation }: any) {
    return (
        <>
            <View style={[styles.h100, styles.p2, styles.bgWhite]}>
                <View style={[styles.mt1]}>
                    <View style={[styles.flexRow, styles.border1, styles.mb2, { padding: 15, borderRadius: 15, borderColor: 'darkgrey' }]}>
                        <Text style={[styles.textBlack, styles.fs5]}>Permission</Text>
                        <Switch
                            style={[{ marginLeft: '51%' }]}
                            trackColor={{ false: 'grey', true: '#6f6aee' }}
                               
                        />
                    </View>
                    <View style={[styles.flexRow, styles.border1, styles.mb2, { padding: 15, borderRadius: 15, borderColor: 'darkgrey' }]}>
                        <Text style={[styles.textBlack, styles.fs5]}>Push Notification</Text>
                        <Switch
                        value={true}
                            style={[{ marginLeft: '34%' }]}
                            trackColor={{ false: 'grey', true: '#6f6aee' }}
                        />
                    </View>
                    <View style={[styles.flexRow, styles.border1, styles.mb2, { padding: 15, borderRadius: 15, borderColor: 'darkgrey' }]}>
                        <Text style={[styles.textBlack, styles.fs5]}>Dark Mode</Text>
                        <Switch
                            style={[{ marginLeft: '53%' }]}
                            trackColor={{ false: 'grey', true: '#6f6aee' }}
                        />
                    </View>
                    <View style={[styles.flexRow, styles.border1, styles.mb2, { padding: 15, borderRadius: 15, borderColor: 'darkgrey' }]}>
                        <Text style={[styles.textBlack, styles.fs5]}>Security</Text>
                        <View style={[{ marginLeft: '72%', marginTop: 3 }]}>
                            <Icon name='arrowright' size={20} color='grey' />
                        </View>
                    </View>
                    <View style={[styles.flexRow, styles.border1, styles.mb2, { padding: 15, borderRadius: 15, borderColor: 'darkgrey' }]}>
                        <Text style={[styles.textBlack, styles.fs5]}>Help</Text>
                        <View style={[{ marginLeft: '82%', marginTop: 3 }]}>
                            <Icon name='arrowright' size={20} color='grey' />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Language')} style={[styles.flexRow, styles.border1, styles.mb2, { padding: 15, borderRadius: 15, borderColor: 'darkgrey' }]}>
                        <Text style={[styles.textBlack, styles.fs5]}>Language</Text>
                        <View style={[{ marginLeft: '67%', marginTop: 3 }]}>
                            <Icon name='arrowright' size={20} color='grey' />
                        </View>
                    </TouchableOpacity>

                    <View style={[styles.flexRow, styles.border1, styles.mb2, { padding: 15, borderRadius: 15, borderColor: 'darkgrey' }]}>
                        <Text style={[styles.textBlack, styles.fs5]}>About Application</Text>
                        <View style={[{ marginLeft: '45%', marginTop: 3 }]}>
                            <Icon name='arrowright' size={20} color='grey' />
                        </View>
                    </View>

                    <View style={[styles.border1, styles.mb2, styles.bgDanger,{ padding: 15, borderRadius: 15, borderColor: 'darkgrey' }]}>
                       <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
                         <Text style={[styles.textBlack, styles.fs5,styles.textCenter,{color:"white",borderBlockColor:"red"}]}>Logout</Text>
                       </TouchableOpacity>
                    </View>

                </View>
            </View>
        </>
    )
}
export default Settings