import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsById,
} from "../slices/basketSlice";

import * as Icon from "react-native-feather";

export default function OrderRow({ name, id, price, image, points, date }) {
  return (
    <>
      <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
        <Image
          className="rounded-3xl"
          style={{ height: 100, width: 100 }}
          source={{ uri: image }}
        />

        <View className="flex flex-1 space-y-3">
          <View className="pl-3">
            <Text className="text-xl">{name}</Text>
          </View>
          <View className="flex-row pl-3 justify-between items-center">
            <Text className="text-gray-700 text-lg font-bold">
              ${price}
              <Text className="text-gray-700 text-md font-normal">{` (${
                price * 20
              } points)`}</Text>
            </Text>
          </View>
        </View>
        <Text className="text-gray-700 text-md">{date}</Text>
      </View>
    </>
  );
}
