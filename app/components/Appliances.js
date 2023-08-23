import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors';

const Appliances = ({ list }) => {
    return (
        <View>
            <Text style={styles.heading}>Appliances</Text>
            <View style={styles.listContainer}>
                {list.map(data => (
                    <View style={styles.itemContainer} key={data.name}>
                        <Image
                            style={styles.fridge}
                            source={require('../assests/fridge.png')}
                        />
                        <Text style={styles.name}>{data.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
};

export default Appliances

const styles = StyleSheet.create({
    fridge: {
        width: 50,
        height: 100,
    },
    heading:{
        fontSize:20,
        fontWeight:"bold",
        color:COLORS.black,
        marginTop:20
    },
    name:{
        color:COLORS.black,
    },
    listContainer:{
        flexDirection: "row",
        flexWrap:"wrap"
    },
    itemContainer: {
        backgroundColor:COLORS.gray,
        borderRadius:10,
        alignItems:"center",
        paddingVertical:10,
        marginRight:20,
        marginTop:20,
        flex:1
    }
})