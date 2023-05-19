import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import React, {useState} from 'react';

import {categories} from '../constants';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{paddingHorizontal: 15}}>
        {categories.map((category, index) => {
          let isActive = category.id === activeCategory;
          let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
          let textClass = isActive
            ? 'font-semibold text-gray-800 '
            : 'text-gray-500';

          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                className={'p-1 rounded-full  bg-gray-200 ' + btnClass}>
                <Image
                  source={category.image}
                  style={{width: 45, height: 45}}
                />
              </TouchableOpacity>
              <Text className={'text-sm ' + textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
