import { useState } from "react";
import { View } from "react-native";
import {TextInput, HelperText, Text} from "react-native-paper"

const DemoHelper = ()=>{
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const checkEmailError = ()=>{
        return !email.includes('@')
    }
    const checkPasswordError = ()=>{
        var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return !regex.test(password);
    }
    return (
        <View style={{flex:1 , justifyContent: "center"}}>
            <TextInput 
                label={<Text style={{ color: checkEmailError()?"red":"blue" }}> Input Email </Text>}
                value={email}
                onChangeText={setEmail}
                left={<TextInput.Icon  icon={"email"}/>}
            />
            <HelperText type="error" visible={checkEmailError()}>
                Sai dia chi email
            </HelperText>
            <TextInput 
                label={<Text style={{ color: checkPasswordError()?"red":"blue" }}> Input Password </Text>}
                value={password}
                onChangeText={setPassword}
                left={<TextInput.Icon  icon={"key"}/>}
                right={<TextInput.Icon  icon={"eye"} onPress={()=> setShowPassword(!showPassword)}/>}
                secureTextEntry={!showPassword}
            />
            <HelperText type="error" visible={checkPasswordError()}>
                min 8 letter password, with at least a symbol, upper and lower case letters and a number
            </HelperText>
        </View>
    )
}


export default DemoHelper;