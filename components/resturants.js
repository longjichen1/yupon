import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./resturantCard";
import * as Icon from "react-native-feather";

export default function Resturants({
  id,
  title,
  description,
  resturants,
  search,
  category,
}) {
  return (
    <View>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        className="overflow-visible ml-6"
      >
        {resturants?.map((resturant) => {
          if (
            resturant.name?.includes(search) ||
            // resturant.description?.contains(search) ||
            resturant.category?.includes(search)
          )
            return (
              <ResturantCard
                key={resturant._id}
                id={resturant._id}
                imgUrl={resturant.image}
                title={resturant.name}
                rating={resturant.stars}
                ratingCount={resturant.reviews}
                type={resturant.category}
                address={resturant.address}
                description={resturant.description}
                dishes={resturant.dishes}
                lng={resturant.lng}
                lat={resturant.lat}
              />
            );
        })}
      </ScrollView>
    </View>
  );
}
