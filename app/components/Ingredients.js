import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../constants/Colors';

const Ingredients = ({name, quantity, list}) => {
  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.name}>{name} ({quantity})</Text>
            <Icon style={styles.icon} name="caretdown"/>
        </View>
      <View>
        {
            list.map(data=>(
                <View style={styles.itemContainer} key={data.name}>
                    <Text style={styles.item}>{data.name}</Text>
                    <Text style={styles.item}>{data.quantity}</Text>
                </View>
            ))
        }
        </View>
    </View>
  )
}

export default Ingredients

const styles = StyleSheet.create({
  name:{
    fontSize:18,
    fontWeight:"bold",
    color:COLORS.black
  },
  item:{
    color:COLORS.black,
    fontSize:15,
    lineHeight:28
  },
  container:{
    flexDirection:"row",
    marginTop:20,
    marginBottom:10
  },
  icon:{
    alignSelf:"center",
    marginLeft:10,
    color:COLORS.black,
    fontSize:14
  },
  itemContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
  }
})