import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
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
  search,
}) {
  function haversineDistance(coord1, coord2) {
    const R = 3958.8; // Earth radius in miles

    const [lat1, lon1] = coord1;
    const [lat2, lon2] = coord2;

    // Convert latitude and longitude from degrees to radians
    const [rLat1, rLon1, rLat2, rLon2] = [lat1, lon1, lat2, lon2].map(
      (deg) => (deg * Math.PI) / 180
    );

    // Haversine formula
    const dLat = rLat2 - rLat1;
    const dLon = rLon2 - rLon1;

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(rLat1) * Math.cos(rLat2) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.asin(Math.sqrt(a));

    // Distance in miles
    const distance = R * c;

    return Math.round(distance); // Rounded to the nearest mile
  }
  const coords = [36.1447, -86.8027];
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
        className="mr-6 mt-3 mb-8 bg-white rounded-3xl shadow-lg"
      >
        <Image className="h-36 w-full rounded-t-3xl" source={{ uri: imgUrl }} />

        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{title}</Text>

          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width={15} height={15} />
            <Text className="text-gray-700 text-xs">
              {" "}
              {haversineDistance([lat, lng], coords)} mi · {address}
            </Text>
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
