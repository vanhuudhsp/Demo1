import { useState } from "react";
import { Text, View } from "react-native";
import {TextInput, HelperText} from "react-native-paper"
const DemoHelperText = ()=>
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword ,setShowPassword] = useState(true);
    const checkEmail = ()=>{
        return !email.includes('@');
    }
    const checkPassword = ()=>{
        var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return !regex.test(password);
    }
    return(
        <View style={{flex:1}}>
            <TextInput
                label={<Text style={{color: (checkEmail())? "red": "blue"}}>Email</Text>}
                value={email}
                onChangeText={setEmail}
                left={<TextInput.Icon icon={"email"}/>}
            />
            <HelperText type="error" visible={checkEmail()}>
                Sai dia chi email
            </HelperText>
            <TextInput
                label={<Text style={{color: (checkPassword())? "red": "blue"}}>Password</Text>}
                value={password}
                onChangeText={setPassword}
                left={<TextInput.Icon icon={"key-variant"}/>}
                secureTextEntry={showPassword}
                right={<TextInput.Icon icon={"eye-circle"} onPress={()=> setShowPassword(!showPassword)}/>}
            />
            <HelperText type="error" visible={checkPassword()}>
                min 8 letter password, with at least a symbol, upper and lower case letters and a number
            </HelperText>
        </View>
    )
}
export default DemoHelperText;