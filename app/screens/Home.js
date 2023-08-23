import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../constants/Colors';
import TopHeader from '../components/TopHeader';
import Menu from '../components/Menu';
import PopularDishes from '../components/PopularDishes';
import axios from 'axios';
import Dishes from '../components/Dishes';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const Home = ({navigation}) => {
    const [data, setData] = useState({})
    useEffect(() => {
        axios("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/").then(
            response => {
                setData(response.data);
            }
        )
    }, [])
    return (
        <>
            <TopHeader />

            <Menu />
            <PopularDishes list={data?.popularDishes} />
            <Dishes navigation={navigation} list={data?.dishes} />


            <View style={styles.bottomContainer}>
                <MIcon name="food" size={23} color={COLORS.white} />
                <Text style={styles.text}>3 food items selected</Text>
                <MIcon name="arrow-right" size={23} color={COLORS.white} />
            </View>

        </>
    )
}

export default Home

const styles = StyleSheet.create({
    bottomContainer: {
        backgroundColor: COLORS.black,
        flexDirection: "row",
        height: 50,
        marginHorizontal: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 30,
        width: "80%",
        marginTop: 30
    },
    text: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 5,
    }

})