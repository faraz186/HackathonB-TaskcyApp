import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "../../../styles/style"
import Icon from 'react-native-vector-icons/AntDesign'

function Slider1({ navigation }: any) {
    return (
        <>
            <Image source={require('../../../Assets/intro1.png')} />
            <Text style={[styles.fs5,styles.textBold, styles.textPrimary, styles.ms3,styles.mb2]}>Task Management</Text>
            <View style={[styles.my1]}>
                <Text style={[styles.fs1, styles.ms3, styles.textBlack]}>Let's create a</Text>
                <Text style={[styles.fs1, styles.ms3, styles.textBlack]}><Text style={[styles.textPrimary, styles.textBold]}>space</Text> for your</Text>
                <Text style={[styles.fs1, styles.ms3, styles.textBlack]}>workflows.</Text>
            </View>
            <View style={[styles.flexRow]}>
                <TouchableOpacity onPress={() => navigation.navigate('Slider2')}>
                    <Text style={[styles.textBlack, styles.ms3, styles.mt2, styles.my1, styles.fs5]}>Skip</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Slider2')} style={[styles.bgPrimary, styles.flexCenter, styles.w100, { marginLeft: 184, height: 150, width: 110, marginTop: -45, borderTopLeftRadius: 150, borderBottomLeftRadius: 150 }]}>
                   <Icon name="arrowright" size={25} style={{color:"white"}}/>
                </TouchableOpacity>
            </View>

        </>
    )
}
export default Slider1