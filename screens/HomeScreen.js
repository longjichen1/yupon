import React, { useState } from "react";
import {
  View,
  TextInput,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Animated,
  TouchableHighlight,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import * as Icon from "react-native-feather";
import Categories from "../components/categories";
import FeatureRow from "../components/featuredRow";
import { featured } from "../constants";

// Enable LayoutAnimation on Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function HomeScreen() {
  const [settings, setSettings] = useState(false);
  const rotateValue = useState(new Animated.Value(0))[0];

  const rotateIcon = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSettings(!settings);
    Animated.spring(rotateValue, {
      toValue: settings ? 0 : 1,
      useNativeDriver: true,
    }).start();
  };

  const rotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2 m-2 ">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput
            placeholder="Search Yupon"
            className="ml-2 flex-1"
            keyboardType="default"
          />
          <Animated.View style={{ transform: [{ rotate: rotation }] }}>
            <View
              style={{ backgroundColor: `rgba(0, 179, 89, 1)` }}
              className="p-3 rounded-full"
            >
              <TouchableHighlight
                underlayColor={`rgba(0, 179, 89, 1)`}
                onPress={rotateIcon}
              >
                <Icon.Sliders
                  height={20}
                  width={20}
                  strokeWidth="2.5"
                  stroke="white"
                />
              </TouchableHighlight>
            </View>
          </Animated.View>
        </View>
      </View>
      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        {/* categories */}
        {settings ? <Categories /> : null}

        {/* featured */}
        <View className="mt-5">
          {[featured, featured, featured].map((category, index) => {
            return (
              <FeatureRow
                key={index}
                id={category._id}
                title={category.name}
                resturants={category?.restaurants}
                description={category.description}
                featuredCategory={category._type}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
