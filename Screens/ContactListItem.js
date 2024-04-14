import { StyleSheet, View } from "react-native"
import { Avatar , Text, Divider} from "react-native-paper"

const ContactListItem = ({name, avatar, phone})=>
{
    console.log(name,avatar, phone )
    return (
        <View style={myStyle.container}>
            <View>
                <Avatar.Image source={{uri: avatar}} size={40}/>
            </View>
            <View>
                <Text> {name}</Text>
                <Text> {phone}</Text>
            </View>
            <Divider/>
            
        </View>
    )
}

export default ContactListItem;

const myStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        //justifyContent: "center",
        padding: 10
    }

})