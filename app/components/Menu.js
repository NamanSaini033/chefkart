import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants/Colors'

const data = [
    { id: 1, name: "Italian" },
    { id: 2, name: "Indian" },
    { id: 3, name: "Indian" },
    { id: 4, name: "Indian" },
    { id: 5, name: "Indian" },
    { id: 6, name: "Indian" },
    { id: 7, name: "Indian" },
    { id: 8, name: "Indian" },
]

const Menu = () => {
    const [id, setId] = useState(1)
    
    return (
        <View>
            <ScrollView horizontal={true} style={styles.container}  >
                {
                    data?.map((list) => (
                        <TouchableOpacity key={list.id} onPress={()=>setId(list.id)}>
                            <Text  style={id == list.id ? styles.italian :styles.indian}>
                                Italians
                            </Text>
                        </TouchableOpacity>
                    ))
                }

            </ScrollView>

        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    italian: {
        borderWidth: 2,
        borderRadius: 30,
        paddingHorizontal: 30,
        marginHorizontal: 10,
        borderColor: COLORS.orange,
        backgroundColor:COLORS.lighOrange,
        paddingVertical:5,
        color:COLORS.orange
    },
    indian: {
        borderWidth: 2,
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical:5,
        marginHorizontal: 10,
        borderColor: COLORS.gray,
        color:COLORS.gray
    },
})