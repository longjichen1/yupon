import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";

export default function ResturantCard({
  id,
  title,
  imgUrl,
  rating,
  type,
  address,
  description,
  dishes,
  lng,
  lat,
  ratingCount,
}) {
  // console.log(urlFor(imgUrl).url());
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("Resturant", {
          id,
          title,
          imgUrl,
          rating,
          type,
          address,
          description,
          dishes,
          lng,
          lat,
          ratingCount,
        });
      }}
    >
      <View
        style={{ shadowColor: `rgba(0, 179, 90, .15)`, shadowRadius: 7 }}
        className="mr-6 bg-white rounded-3xl shadow-lg"
      >
        <Image className="h-36 w-64 rounded-t-3xl" source={{ uri: imgUrl }} />

        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{title}</Text>

          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width={15} height={15} />
            <Text className="text-gray-700 text-xs"> Nearby · {address}</Text>
          </View>
          <View className="flex-row items-center space-x-1">
            {ratingCount != null && ratingCount != 0 ? (
              <Image
                source={require("../assets/images/fullStar.png")}
                className="h-4 w-4"
              />
            ) : null}
            <Text className="text-xs">
              <Text className="text-green-700">{rating}</Text>
              <Text className="font-semibold text-gray-700">{` (${
                ratingCount != null && ratingCount != 0 ? ratingCount : 0
              } ratings) · ${type}`}</Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
