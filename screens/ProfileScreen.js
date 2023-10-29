import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as Icon from "react-native-feather";
import { useNavigation, useRoute } from "@react-navigation/native";
import OrderRow from "../components/orderRow";
export default function ProfileScreen() {
  const navigation = useNavigation();
  // Dummy Data for Order History
  const [orderHistory, setOrderHistory] = useState([
    {
      id: "1",
      name: "Papa Johns",
      date: "2022-01-01",
      price: 92,
      points: 550,
      image:
        "https://cdn.discordapp.com/attachments/1167827877224534166/1168023784259850310/3ac2b39ad528f8c8c5dc77c59abb683d.png?ex=655041eb&is=653dcceb&hm=88479c56948e899c9eb0bf34722cdc0a06697d7742e71683891c4fd985137941&",
    },
    {
      id: "2",
      name: "Bangkok Bites",
      date: "2022-01-10",
      price: 21,
      points: 100,
      image:
        "https://cdn.discordapp.com/attachments/1167827877224534166/1168020869596069978/117126037_1158185471226275_3178096849830461411_o.png?ex=65503f34&is=653dca34&hm=f1e529b1d2b9bec16f9196ecd90ddd6507b320f11409ac717757f6124f8a262b&",
    },
    {
      id: "3",
      name: "Cancun Cantina",
      date: "2022-01-20",
      price: 250,
      points: 250,
      image:
        "https://cdn.discordapp.com/attachments/1167827877224534166/1168021296592994365/cancun-cantina.png?ex=65503f99&is=653dca99&hm=77dd54b7a42c77c4ad71083e47db348c582d1a0e6b92e71cfd237ca05e479ff5&",
    },
    // ... more orders
  ]);

  return (
    <>
      <ScrollView>
        <View className="relative">
          <Image
            className="w-full h-72"
            source={{
              uri: "https://cdn.discordapp.com/attachments/1167827877224534166/1168039130417086595/file-GU4aMguOVbyDOrgO6WihH2KV.png?ex=65505035&is=653ddb35&hm=94626ea33688b668f7068d942c9b56d7ee344fa128ed7dca910a432649c48a8d&",
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-lg shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={`rgba(0, 179, 89, 1)`} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold"></Text>
            {/* copy this code from restaurant card */}
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center mx-auto border-b-2 w-full pb-6 justify-center space-x-1">
                <Text className="text-green-600 font-bold text-3xl">
                  John Doe
                </Text>
              </View>
            </View>
            <Text className="text-gray-800 font-bold text-3xl mt-6 mb-4">
              Previous Orders
            </Text>
          </View>
        </View>
        <View className="h-[180%] bg-white">
          {/* dishes */}
          {orderHistory.map((order) => {
            return (
              <OrderRow
                name={order.name}
                id={order.date + order.name}
                price={order.price}
                image={order.image}
                points={order.points}
                date={order.date}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
  },
  profileContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  orderHistoryContainer: {
    flex: 1,
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  orderHistoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  orderItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  orderItemText: {
    fontSize: 16,
  },
});
