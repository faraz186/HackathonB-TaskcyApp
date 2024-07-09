import { Switch, Text, View } from "react-native"
import styles from "../../../styles/style"

function Language() {
    return (
        <>
            <View style={[styles.h100, styles.bgWhite, styles.p2]}>
                <View style={[styles.border1, styles.mt1, styles.ps2, styles.p2, { borderColor: 'grey', borderRadius: 15 }]}>
                    <Text style={[styles.textBlack, styles.fs5]}>English </Text>
                    
                </View>
                <View style={[styles.border1, styles.mt1, styles.ps2, styles.p2, { borderColor: 'grey', borderRadius: 15 }]}>
                    <Text style={[styles.textBlack, styles.fs5]}>Spanish</Text>
                </View>
                <View style={[styles.border1, styles.mt1, styles.ps2, styles.p2, { borderColor: 'grey', borderRadius: 15 }]}>
                    <Text style={[styles.textBlack, styles.fs5]}>Urdu</Text>
                </View>
                <View style={[styles.border1, styles.mt1, styles.ps2, styles.p2, { borderColor: 'grey', borderRadius: 15 }]}>
                    <Text style={[styles.textBlack, styles.fs5]}>France</Text>
                </View>
                <View style={[styles.border1, styles.mt1, styles.ps2, styles.p2, { borderColor: 'grey', borderRadius: 15 }]}>
                    <Text style={[styles.textBlack, styles.fs5]}>Bangla</Text>
                </View>
            </View>
        </>
    )
}
export default Language