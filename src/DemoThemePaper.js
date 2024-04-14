import {View, Text, StyleSheet} from "react-native"
import {useTheme, MD3DarkTheme, MD3LightTheme, IconButton , Avatar} from "react-native-paper"
import {useMaterial3Theme} from "@pchmn/expo-material3-theme"
import { useState } from "react"

const DemoThemePaper = ()=>{
    const [darkMode , setDarkMode] = useState(true)
    const  { theme}  = useMaterial3Theme()
    const paperTheme = (darkMode)? {...MD3DarkTheme, colors: theme.dark}
                        : {...MD3LightTheme, colors: theme.light}
    return(
        <View style={{flex:1, padding:10, paddingTop:30}}>
            <IconButton icon={(darkMode)? "lightbulb-on-outline" :"moon-waxing-crescent"} size={30} 
            onPress={()=> setDarkMode(!darkMode)}/>
            <View style={{...myStyles.box, backgroundColor: paperTheme.colors.primary}}>
                <Text style={{color: paperTheme.colors.onPrimary}}>primary </Text>
            </View>
            <View style={{...myStyles.box, backgroundColor: paperTheme.colors.secondary}}>
                <Text style={{color: paperTheme.colors.onSecondary}}>secondary </Text>
            </View>
            <View style={{...myStyles.box, backgroundColor: paperTheme.colors.error}}>
                <Text style={{color: paperTheme.colors.onError}}>error</Text>
            </View>
            <Avatar.Text label="ABC" size={40} color="blue"/>
        </View>
    )
}
export default DemoThemePaper;
const myStyles = StyleSheet.create(
    {
        box:{
            height: 50,
            justifyContent: "center",
            alignItems: "center"
        }
    }
)