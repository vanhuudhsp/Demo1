import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";

const Caculator = ()=>
{
    const buttonLeft=[
        ["C","DEL"],
        ["7","8","9"],
        ["4","5","6"],
        ["1","2","3"],
        ["0","."],
    ]
    const buttonRight=["/","*","-","+","="]
    
    return(
        <View style={myStyles.container}>
            <View style={myStyles.contianerResult}>

            </View>
            <View style={myStyles.containerButton}>
                <View style={myStyles.containerLeft}>
                    {buttonLeft.map((row, index)=> 
                    <View style={{...myStyles.containerRow,backgroundColor: (index==0)?"gray":"white"}}>
                        {row.map((item)=> 
                        <TouchableOpacity style={myStyles.button}>
                            <Text style={myStyles.buttonText}>{item}</Text>
                        </TouchableOpacity>
                        )}
                    </View>)}
                </View>
                <View style={myStyles.containerRight}>
                    
                </View>
            </View>
        </View>
    )
}


export default Caculator;


const myStyles = StyleSheet.create(
    {
      container:{
        flex:1
      },
      contianerResult:{
        flex:1,
        //backgroundColor:"aqua"
      },
      containerButton:{
        flex:2,
        //backgroundColor:"blue"
        flexDirection:"row"
      },
      containerLeft:{
        flex:3,
        backgroundColor:"white"
      },
      containerRight:{
        flex:1,
        backgroundColor:"aqua"
      },
      containerRow:{
        flex:1,
        flexDirection:"row"
      },
      button:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
      },
      buttonText:{
        fontSize: 28
      }
      
  
    }
  )