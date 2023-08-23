import { FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const DATA = [{ "dishes": [{ "name": "Masala Mughlai", "rating": 4.2, "description": "Chicken fried in deep tomato sauce with delicious spices", "equipments": ["Refrigerator", "Microwave"], "image": "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg", "id": 1 }, { "name": "Masala Paneer", "rating": 4.3, "description": "Paneer tossed in gravy", "equipments": ["Microwave"], "image": "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg", "id": 2 }], "popularDishes": [{ "name": "Biryani", "image": "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg", "id": 3 }, { "name": "Daal Batti", "image": "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg", "id": 4 }, { "name": "Veg Korma", "image": "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg", "id": 5 }, { "name": "Chicken Korma", "image": "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg", "id": 6 }] }]

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  return (
    <>
      <View>
        <Text style={styles.firstcontainer}>Select Dishes</Text>
      </View>
      <View style={styles.container}>

      </View>
      <View style={styles.smallcontainer}>
        <Text style={{ color: "black", fontWeight: "bold" }}>
          31 May 2021
        </Text>
        <Text style={{ color: "black", fontWeight: "bold" }}>
          10:30 Pm - 12:30 Pm
        </Text>
      </View>

      <View style={{ marginTop: 10, marginHorizontal: 5 }} >

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false
        }>
          <View style={{ flexDirection: "row", justifyContent: "space-around", borderColor: "orange" }}>
            <TouchableOpacity>
              <Text style={styles.Italian}>
                Italian
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.Italian}>
                Italian
              </Text></TouchableOpacity>
            <Text style={styles.Italian}>
              Italian
            </Text><TouchableOpacity>
              <Text style={styles.Italian}>
                Italian
              </Text>
              </TouchableOpacity>
          </View>
        </ScrollView>
        {/* <TabConatiner activeTab={activeTab} setActiveTab={setActiveTab} />
        <ScrollView style={styles.postContainer}>
          {activeTab === "Posts" && <PostConatiner />}
          {activeTab === "About" && <Text>About</Text>}
          {activeTab === "Social" && <Text>Social</Text>}
          {activeTab === "Gallery" && <Text>Gallary</Text>}
          {activeTab === "Device" && <Text>Device</Text>}
        </ScrollView> */}

      </View>

      <View>
        <Text style={{ color: "black", fontWeight: "bold", paddingLeft: 20, paddingTop: 20 }}>
          Popular Dishes
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false
        }>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
            <ImageBackground
              style={styles.imageBackground}
              source={require("app/assests/dishImage.jpg")}
              resizeMode="cover"
              borderRadius={100}
            >
              <Text style={styles.text}>Biryani</Text>
            </ImageBackground>

            <ImageBackground
              style={styles.imageBackground}
              source={require("app/assests/dishImage.jpg")}
              resizeMode="cover"
              borderRadius={100}
            >
              <Text style={styles.text}>Biryani</Text>
            </ImageBackground>
            <ImageBackground
              style={styles.imageBackground}
              source={require("app/assests/dishImage.jpg")}
              resizeMode="cover"
              borderRadius={100}
            >
              <Text style={styles.text}>Biryani</Text>
            </ImageBackground>
            <ImageBackground
              style={styles.imageBackground}
              source={require("app/assests/dishImage.jpg")}
              resizeMode="cover"
              borderRadius={100}
            >
              <Text style={styles.text}>Biryani</Text>
            </ImageBackground>
            <ImageBackground
              style={styles.imageBackground}
              source={require("app/assests/dishImage.jpg")}
              resizeMode="cover"
              borderRadius={100}
            >
              <Text style={styles.text}>Biryani</Text>
            </ImageBackground>


          </View>
        </ScrollView>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "grey", padding: 15, marginHorizontal: 20, borderEndEndRadius: 50 }}></View>
      </View>
      <View>
        <View style={{ paddingHorizontal: 20, paddingTop: 10, marginTop: 10, flexDirection: "row" }}>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>
            Masala Muglai
          </Text>
          <Image
            style={{ height: 50, width: 50, borderRadius: 10 }}
            source={require("app/assests/dishImage.jpg")}
          />
        </View>
        <View style={{ flexDirection: "row", }}>
          <Text style={{ fontSize: 10 }}> Refrigerator </Text>
          <Text style={{ fontSize: 10 }}> Refrigerator </Text>
          <Text style={{ borderRightWidth: 1, borderColor: "grey", paddingHorizontal: 10 }}></Text>
          <Text style={{ color: "black", fontWeight: "bold" }}> Ingredients</Text>
        </View>
        <Text >Chicken fried in deep tomato sauce with delicious spices</Text>
      </View>
      <View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "grey", padding: 15, marginHorizontal: 20, borderEndEndRadius: 50 }}></View>
        <View style={{ paddingHorizontal: 20, paddingTop: 10, marginTop: 10, flexDirection: "row" }}>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>
            Masala Muglai
          </Text>
          <Image
            style={{ height: 50, width: 50, borderRadius: 10 }}
            source={require("app/assests/dishImage.jpg")}
          />
        </View>
        <View style={{ flexDirection: "row", }}>
          <Text style={{ fontSize: 10 }}> Refrigerator </Text>
          <Text style={{ fontSize: 10 }}> Refrigerator </Text>
          <Text style={{ borderRightWidth: 1, borderColor: "grey", paddingHorizontal: 10 }}></Text>
          <Text style={{ color: "black", fontWeight: "bold" }}> Ingredients</Text>
        </View>
        <Text >Chicken fried in deep tomato sauce with delicious spices</Text>
      </View>

      <View style={{ backgroundColor: "black", height: 50, marginHorizontal: 50, borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: 30 }}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>3 food items selected</Text>
      </View>
      <View>
        <SafeAreaView >
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>

    </>
  )
}

export default App

const styles = StyleSheet.create({
  firstcontainer: {
    color: "black",
    fontSize: 18,
    padding: 15,
  },
  container: {
    backgroundColor: "black", height: 60,
  },
  smallcontainer: {


    height: 80,
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
  Italian: {
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    borderColor: "orange"
  },
  text: {
    color: 'white',
    fontSize: 15,
    //borderRadius:50,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 60,

  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },

  imageBackground: {
    width: 80,
    height: 80, marginHorizontal: 5
  }

})