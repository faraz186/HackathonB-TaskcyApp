import { View, Image, Text, TextInput } from "react-native"
import styles from "../../../styles/style"

function EditProfile() {
    return (
        <>
            <View style={[styles.h100, styles.bgWhite]}>
                <View style={[{ marginLeft: '34%' }, styles.mt2]}>
                    <Image style={{ height: 120, width: 120, borderRadius: 100 }} source={require('../../../Assets/myProfilePic.jpeg')} />
                </View>
                <View style={[styles.p2]}>
                    <View style={[styles.mt2]}>
                        <Text style={[styles.textBlack, styles.fs]}>Name:</Text>
                        <TextInput style={[styles.border1, styles.ps1, styles.mt1, styles.fs, { borderRadius: 10, borderColor: 'grey' }]} placeholder="Muhammad Faraz" placeholderTextColor='lightgrey' />
                    </View>
                    <View style={[styles.mt2]}>
                        <Text style={[styles.textBlack, styles.fs]}>Email:</Text>
                        <TextInput style={[styles.border1, styles.ps1, styles.mt1, styles.fs, { borderRadius: 10, borderColor: 'grey' }]} placeholder="faraz@gmail.com" placeholderTextColor='lightgrey' />
                    </View>
                    <View style={[styles.mt2]}>
                        <Text style={[styles.textBlack, styles.fs]}>User Name:</Text>
                        <TextInput style={[styles.border1, styles.ps1, styles.mt1, styles.fs, { borderRadius: 10, borderColor: 'grey' }]} placeholder="faraz_muhammad" placeholderTextColor='lightgrey' />
                    </View>
                    <View style={[styles.mt2]}>
                        <Text style={[styles.textBlack, styles.fs]}>Number:</Text>
                        <TextInput style={[styles.border1, styles.ps1, styles.mt1, styles.fs, { borderRadius: 10, borderColor: 'grey' }]} placeholder="+92-309-1231718" placeholderTextColor='lightgrey' />
                    </View>
                </View>
            </View>

        </>
    )
}
export default EditProfile