import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../constants/Colors';
import Icon from 'react-native-vector-icons/Feather';
import Ingredients from '../components/Ingredients';
import axios from 'axios';
import Appliances from '../components/Appliances';

const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };
const ListView = ({route}) => {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/'+route?.params?.id)
      .then(function (response) {
        // handle success
        setData(response.data);
      })
  }, [])
  return (
    <ScrollView style={styles.container} >
      <ImageBackground source={require("../assests/foodImage.jpg")}>
        <View style={styles.flexRow}>
          <Text style={styles.heading}>{data?.name}</Text>
          <View style={styles.badgeContainer}>
            <Text style={styles.badge}>4.2*</Text>
          </View>
        </View>
        <Text style={styles.des}>Mughlai Masla is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mugal Empire </Text>
        <View style={styles.flexRow}>
          <Icon name="clock" size={28} style={styles.icon} />
          <Text style={styles.time}>{data.timeToPrepare}</Text>
        </View>
      </ImageBackground>
      <View style={styles.ingContainer}>
        <Text style={styles.ingHeading}>Ingredients</Text>
        <Text>For 2 people</Text>
      </View>
      <View style={styles.ingrContainer}>
        <Ingredients
          name="Vegetables"
          quantity="05"
          list={data?.ingredients?.vegetables || []}
        />
        <Ingredients
          name="Spices"
          quantity="10"
          list={data?.ingredients?.spices || []}
        />
        <Appliances list={data?.ingredients?.appliances || []}/>
      </View>

    </ScrollView>
  )
}

export default ListView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: COLORS.white
  },
  icon: {
    color: COLORS.green,
    marginLeft: 20
  },
  ingrContainer: {
    paddingHorizontal: 20
  },
  ingHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: COLORS.black
  },
  ingContainer: {
    borderBottomWidth: 1,
    paddingVertical: 20,
    borderBottomColor: COLORS.gray,
    marginHorizontal: 20,
  },
  time: {
    color: COLORS.black,
    fontSize: 18,
    alignSelf: "center",
    marginLeft: 5,
    fontWeight: "bold",
  },
  heading: {
    color: COLORS.black,
    fontWeight: "bold",
    fontSize: 28,
    paddingLeft: 20,
  },
  badgeContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: 8
  },
  badge: {
    backgroundColor: COLORS.green,
    paddingVertical: 2,
    paddingHorizontal: 5,
    color: COLORS.white,
    fontSize: 10,
    marginHorizontal: 10,
    borderRadius: 5
  },
  flexRow: {
    flexDirection: "row"
  },
  des: {
    fontSize: 13,
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 20,
    marginRight: 180,
    color: COLORS.gray
  }
});