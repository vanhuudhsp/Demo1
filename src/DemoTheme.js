import {StyleSheet, View, Text} from "react-native"
import { useTheme } from 'react-native-paper'

const DemoTheme = ()=>{
    const  theme = useTheme()
    return (
        <View style={myStyles.container}>
            <View style={{...myStyles.box, backgroundColor: theme.colors.tertiaryContainer}}>
                <Text style={{...myStyles.text, color: theme.colors.onTertiaryContainer}}> Hello </Text>
            </View>
        </View>
    )
}
export default DemoTheme;
const myStyles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        margin: 10,
    }
    ,
    box:{
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        fontSize: 20,
        fontWeight: "bold",
    }

})
