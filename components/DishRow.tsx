import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {themeColors} from '../theme';
import * as Icon from 'react-native-feather';

import {useDispatch, useSelector} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import type {RootState, AppDispatch} from '../store';
import {SelectedRestaurant} from '../slices/restaurantSlice';
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsById,
} from '../slices/basketSlice';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const DishRow = ({item}: {item: any}) => {
  const dispatch = useDispatch();

  // const totalItems = useSelector(state =>
  //   selectBasketItemsById(state, item.id),
  // );
  console.log('hello world!');
  const totalItems = useSelector((state: RootState) =>
    selectBasketItemsById(state, item.id),
  );

  const handleIncrease = () => {
    dispatch(addToBasket({...item}));
  };

  const handleDecrease = () => {
    dispatch(removeFromBasket({id: item.id}));
  };

  return (
    <View className="flex-row items-center bg-gray-100 p-3 rounded-3xl shadow-2xl mb-2 mx-2">
      <Image
        className=" rounded-3xl "
        style={{height: 100, width: 100}}
        source={item.image}
      />

      <View className="flex flex-1 space-y-3  ">
        <View className="pl-3">
          <Text className="text-xl ">{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold">₹{item.price}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              disabled={!totalItems.length}
              className="p-1 rounded-full"
              style={{backgroundColor: themeColors.bgColor(1)}}>
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                color={'white'}
                onPress={handleDecrease}
              />
            </TouchableOpacity>
            <Text className="px-3">{totalItems.length}</Text>
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{backgroundColor: themeColors.bgColor(1)}}
              onPress={handleIncrease}>
              <Icon.Plus
                strokeWidth={2}
                height={20}
                width={20}
                color={'white'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;

const styles = StyleSheet.create({});
