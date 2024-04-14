import {View, Text, StyleSheet} from "react-native"
const Home = ()=>{
    return (
        <View style={myStyle.box}>
            <Text style={myStyle.text}> Home Screen </Text>
        </View>
    )
}
export default Home;

const myStyle = StyleSheet.create({
    box:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
    ,
    text:{
        fontSize: 30,
        fontWeight: "bold"
    }
})