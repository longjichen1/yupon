import React, { useMemo, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../slices/basketSlice";
import { selectResturant } from "../slices/resturantSlice";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";

export default function BasketScreen() {
  const resturant = useSelector(selectResturant);
  const [groupedItems, setGroupedItems] = useState([]);
  const basketItems = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const deliveryFee = 2;

  useMemo(() => {
    const gItems = basketItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(gItems);
  }, [basketItems]);

  const checkBasket = (len) => {
    console.log("checked", len);
    if (len == 1) {
      navigation.navigate("Home");
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ paddingVertical: 16, position: "relative" }}>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 20,
            left: 8,
            backgroundColor: `rgba(0, 179, 89, 1)`,
            padding: 8,
            borderRadius: 50,
            zIndex: 10,
          }}
          onPress={navigation.goBack}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Your cart
          </Text>
          <Text style={{ textAlign: "center", color: "gray" }}>
            {resturant.title}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 16,
          alignItems: "center",
          backgroundColor: `rgba(0, 179, 89, .14)`,
        }}
      >
        <Image
          source={require("../assets/images/bikeGuy.png")}
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
        <Text style={{ flex: 1, paddingLeft: 16 }}>
          Ready for pickup in 20-30 minutes
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 50,
        }}
      >
        {Object.entries(groupedItems).map(([key, items]) => (
          <View
            key={key}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 8,
              paddingHorizontal: 16,
              backgroundColor: "white",
              borderRadius: 25,
              marginHorizontal: 8,
              marginBottom: 12,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
            }}
          >
            <Image
              style={{
                height: 56,
                width: 56,
                borderRadius: 28,
                paddingRight: 5,
              }}
              source={{ uri: items[0].image }}
            />
            <Text
              style={{
                color: "#009950",
                fontWeight: "bold",
                paddingLeft: 5,
              }}
            >
              {items.length} x
            </Text>
            <Text
              style={{
                flex: 1,
                fontWeight: "bold",
                color: "gray",
                paddingLeft: 5,
              }}
            >
              {items[0]?.name}
            </Text>
            <Text style={{ fontWeight: "600", fontSize: 16, paddingRight: 5 }}>
              ${items[0]?.price}
            </Text>
            <TouchableOpacity
              style={{
                padding: 8,
                borderRadius: 50,
                paddingLeft: 8,
                backgroundColor: `rgba(0, 179, 89, 1)`,
              }}
              onPress={() => {
                dispatch(removeFromBasket({ id: items[0]?.id }));
                checkBasket(items.length);
              }}
            >
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                stroke="white"
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View
        style={{
          paddingVertical: 24,
          paddingHorizontal: 32,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          backgroundColor: `rgba(0, 179, 89, .14)`,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "gray" }}>Subtotal</Text>
          <Text style={{ color: "gray" }}>${basketTotal}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 3,
          }}
        >
          <Text style={{ color: "gray" }}>Delivery Fee</Text>
          <Text style={{ color: "gray" }}>${deliveryFee}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 3,
            borderBottomWidth: 1,
            paddingBottom: 3,
          }}
        >
          <Text style={{ color: "gray" }}>Points You Earn</Text>
          <Text style={{ color: "gray" }}>{basketTotal * 2} points</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 3,
          }}
        >
          <Text style={{ fontWeight: "800" }}>Order Total</Text>
          <Text style={{ fontWeight: "800" }}>
            ${basketTotal + deliveryFee}
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={{
              paddingVertical: 12,
              borderRadius: 50,
              backgroundColor: `rgba(0, 179, 89, 1)`,
              marginTop: 7,
            }}
            onPress={() => navigation.navigate("PreparingOrder")}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
