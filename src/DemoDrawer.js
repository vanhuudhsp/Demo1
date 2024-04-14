import { useState } from "react";
import { Drawer } from "react-native-paper"
const DemoDrawer = ()=>{

    const [active, setActive] = useState("");
    return(
        <Drawer.Section>
            <Drawer.Item
                label="Home"
                icon={"home"}
                active={active==="home"}
                onPress={()=> setActive("home")}
            />
             <Drawer.Item
                label="Profile"
                icon={"star"}
                active={active==="profile"}
                onPress={()=> setActive("profile")}
            />
        </Drawer.Section>
    )
}
export default DemoDrawer;