import {View, Text, StyleSheet} from "react-native"

const Project1 = ()=>{

    return(
        <View style={myStyles.container}>
            <Text style={myStyles.text}> Hello Word </Text>
        </View>
    )
}

export default Project1

const myStyles = StyleSheet.create({
    container:{
        //flexDirection: "column"  m
        height: 200,
        width: 200,
        backgroundColor: "aqua",
        justifyContent: "center", //can le theo chinh
        alignItems: "center"//can le theo truc phu
    },
    text:{
        fontSize: 20,
        fontWeight: "bold"
    }
})