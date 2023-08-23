import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'

const PopularDishes = ({ list }) => {
    return (
        <View>
            <Text style={styles.dishes}>
                Popular Dishes
            </Text>
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false
                }>
                    {
                        list?.map(data => (
                            <ImageBackground
                                key={data.id}
                                style={styles.imageBackground}
                                source={{ uri: data.image }}
                                resizeMode="cover"
                                borderRadius={100}
                            >
                                <Text style={styles.text}>{data.name}</Text>
                            </ImageBackground>
                        ))
                    }
                </ScrollView>
            </View>
            <View style={styles.borderBottom}></View>
        </View>
    )
}

export default PopularDishes

const styles = StyleSheet.create({
    dishes: {
        color: COLORS.black,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20,
        fontSize: 20,
        marginBottom: 10
    },
    imgContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    imageBackground: {
        width: 80,
        height: 80,
        marginHorizontal: 5,
    },
    text: {
        color: 'white',
        fontSize: 15,
        //borderRadius:50,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 60,

    },
    borderBottom: {
        borderBottomWidth: 3,
        borderBottomColor: COLORS.gray,
        padding: 15,
    }
})