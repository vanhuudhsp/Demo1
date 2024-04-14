import { useState } from "react"
import {Drawer} from "react-native-paper"
const DemoDrawer2 = ()=>{
    const [active , setActive] = useState("");
    return (
        <Drawer.Section>
            <Drawer.Item 
                label="Home" 
                icon="home"
                active={active=="home"}
                onPress={()=> setActive("home")}
                />
            <Drawer.Item 
                label="Email" 
                icon="email"
                active={active=="email"}
                onPress={()=> setActive("email")}
                />
        </Drawer.Section>
    )

}

export default DemoDrawer2