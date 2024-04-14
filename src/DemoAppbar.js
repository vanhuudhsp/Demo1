import { Alert } from "react-native";
import {Appbar} from "react-native-paper"

const DemoAppbar = ()=>{
    return(
        <Appbar.Header>
            <Appbar.BackAction onPress={()=> Alert.alert("Quay lai trang chu")}/>
            <Appbar.Content title="sjdhfjs"/>
            <Appbar.Action  icon={"star"}/>
            <Appbar.Action  icon={"star"}/>
        </Appbar.Header>
    )
}

export default DemoAppbar;