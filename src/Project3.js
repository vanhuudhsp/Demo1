import {View, Text, StyleSheet, TouchableOpacity} from "react-native"

const Project3 = ()=>{

    return(
        <View style={myStyles.container}>
            <TouchableOpacity style={{...myStyles.button, backgroundColor: "red" }}>
                <Text style={{color:"white"}}> Say Hello </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...myStyles.button, backgroundColor: "blue" }}>
                <Text style={myStyles.text}> Say Goodbute </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Project3

const myStyles = StyleSheet.create({
    container:{
        flex:1, // Toan man hinh
        alignItems: "center"
    },
    button:{
        height: 60,
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
        margin: 20
    },
    text:{
        color:"white",
        fontSize: 20,
    }
})