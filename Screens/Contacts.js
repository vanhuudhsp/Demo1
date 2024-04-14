import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native"
import { fetchContacts } from "../utility/Api";
import ContactListItem from "./ContactListItem";

const Contacts =()=>{
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    useEffect(()=>{
      fetchContacts()
      .then(data =>{
        setContacts(data)
        setLoading(false)
        setError(false)
      })
      .catch(e => {
        setLoading(false)
        setError(true)
      })
    },[])

    const renderItem = ({item})=>
    {
        //console.log(item)
        return (
            <ContactListItem name={item.name}  avatar={item. avatar} phone={item.phone}/>
        )
    }
    return(
        <View style={{flex:1 }}>
            {(loading)&& <ActivityIndicator color={"blue"} size={40}/>  }
            {(error)&& <Text>Error Loading ....</Text>  }
            {(!loading)&&(!error)&&
                <FlatList
                    data={contacts}
                    keyExtractor={(item)=> item.id}
                    renderItem={renderItem}
                
                />
            
            }
            
        </View>
    )
}
export default Contacts;