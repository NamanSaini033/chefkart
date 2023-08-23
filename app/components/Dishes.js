import { FlatList, TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../constants/Colors';

const Dishes = ({ list, navigation }) => {
    const Item = ({ item }) => (
        <TouchableOpacity onPress={()=>{navigation.navigate("List", {id:item.id})}} style={styles.containeritem}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>
                    {item.name}
                </Text>
                <View style={styles.textContainer}>
                    <View style={styles.textContainer}>
                        <View style={styles.icnContainer}>
                            <MIcon name="fridge" size={22} color={COLORS.black} />
                            <Text style={{ fontSize: 10 }}> Refrigerator </Text>
                        </View>
                        <View style={styles.icnContainer}>
                            <MIcon name="fridge" size={22} color={COLORS.black} />
                            <Text style={{ fontSize: 10 }}> Refrigerator </Text>
                        </View>
                    </View>
                    <Text style={styles.line}></Text>
                    <View style={styles.leftContainer}>
                        <Text style={styles.textIng}> Ingredients</Text>
                        <Text style={styles.listText}>View List </Text>
                    </View>
                </View>

                <Text style={styles.des}>{item.description}</Text>
            </View>
            <View>
                <Image
                    style={styles.img}
                    source={require("../assests/dishImage.jpg")}
                />
            </View>

        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <View style={styles.flexRow}>
                <View style={styles.heading}>
                    <Text style={styles.name}>Recommended</Text>
                    <Icon style={styles.icon} name="caretdown" />
                </View>
                <View style={styles.menuContainer}>
                    <Text style={styles.menu}>Menu</Text>
                </View>
            </View>

            {/* dished loop */}
            <FlatList
                data={list}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Dishes

const styles = StyleSheet.create({
    des: {
        marginTop: 10
    },
    line: {
        borderRightWidth: 1,
        borderColor: COLORS.gray,
        paddingHorizontal: 10
    },
    leftContainer: {
        marginLeft: 10,
    },
    textContainer: {
        flexDirection: "row"
    },
    textIng:
    {
        color: "black",
        fontWeight: "bold"
    },
    listText: {
        fontSize: 12,
        color: COLORS.orange,
        fontWeight: "bold"
    },
    icnContainer: {
        alignItems: "center"
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 10
    },
    itemText: {
        color: COLORS.black,
        fontWeight: "bold",
        fontSize: 20
    },
    containeritem: {
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.gray,
        flexDirection: "row"
    },
    itemContainer: {
        marginTop: 10,
        flex: 1,
    },
    heading: {
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 10
    },
    container: {
        paddingHorizontal: 20,
    },

    flexRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    menuContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        alignSelf: "center",
        marginLeft: 10,
        color: COLORS.black,
        fontSize: 14
    },
    menu: {
        backgroundColor: COLORS.black,
        color: COLORS.white,
        textAlign: "center",
        alignSelf: "center",
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        color: COLORS.black
    },
})