import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/EvilIcons';
import { COLORS } from '../constants/Colors';

const TopHeader = () => {
    return (
        <>
            <Text style={styles.container}>Select Dishes</Text>
            <View style={styles.box}></View>
            <View style={styles.boxContainer}>
                <View style={styles.flexRow}>
                    <Icon name="calendar" size={30} color={COLORS.orange} />
                    <Text style={{ color: "black", fontWeight: "bold" }}>
                        21 May 2021
                    </Text>
                </View>
                <View style={styles.flexRow}>
                    <Icon name="clock" size={30} color={COLORS.orange} />
                    <Text style={{ color: "black", fontWeight: "bold" }}>
                        10:30 Pm - 12:30 Pm
                    </Text>
                </View>

            </View>
        </>
    )
}

export default TopHeader

const styles = StyleSheet.create({
    container: {
        color: COLORS.black,
        fontSize: 18,
        fontWeight: "bold",
        padding: 15,
    },
    box: {
        backgroundColor: COLORS.black,
        height: 60,
    },
    flexRow: {
        flexDirection: "row"
    },

    boxContainer: {
        paddingVertical: 20,
        borderRadius: 10,
        marginHorizontal: 30,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        top: -30,
        backgroundColor: "white",
        shadowColor: 'black',  // Shadow color
        shadowOpacity: 0.3,    // Shadow opacity
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 4,       // Shadow radius
        elevation: 5,          // Android shadow elevation
    },
})