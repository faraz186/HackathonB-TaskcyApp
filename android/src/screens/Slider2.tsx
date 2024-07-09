import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "../../../styles/style"
import Icon from 'react-native-vector-icons/AntDesign'

function Slider2({ navigation }: any) {
    return (
        <>
            <Image source={require('../../../Assets/intro2.png')} />
            <Text style={[styles.fs5,styles.textBold, styles.mt4, styles.textPrimary, styles.ms3]}>Task Management</Text>
            <View style={[styles.mt2]}>
                <Text style={[styles.fs1, styles.ms3, styles.textBlack]}>Work more</Text>
                <Text style={[styles.fs1, styles.ms3, styles.textBlack]}><Text style={[styles.textPrimary, {fontWeight:700}]}>Structured </Text>and</Text>
                <Text style={[styles.fs1, styles.ms3, styles.textBlack]}>Organized.</Text>
            </View>
            <View style={[styles.flexRow, styles.mt2]}>
                <TouchableOpacity onPress={()=>navigation.navigate('Slider3')}>
                    <Text style={[styles.textBlack, styles.ms3, styles.mt2, styles.my1, styles.fs5]}>Skip</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Slider3')} style={[styles.bgPrimary, styles.flexCenter, styles.w100, { marginLeft: 184, height: 150, width: 110, marginTop: -40, borderTopLeftRadius: 150, borderBottomLeftRadius: 150 }]}>
                   <Icon name="arrowright" size={25} style={{color:"white"}}/>
                </TouchableOpacity>
            </View>

        </>
    )
}
export default Slider2