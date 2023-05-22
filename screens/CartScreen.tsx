import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Icon from 'react-native-feather';
import {themeColors} from '../theme';
import {RootStackParamList} from '../App';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {useDispatch, useSelector} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import type {RootState, AppDispatch} from '../store';
import {SelectedRestaurant} from '../slices/restaurantSlice';
import {selectBasketItems, selectBasketTotal} from '../slices/basketSlice';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const CartScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // const restaurant = featured.restaurants[0];

  const cartItems = useSelector(selectBasketItems);
  const cartTotal = useSelector(selectBasketTotal);
  const restaurant = useSelector(SelectedRestaurant);

  const [groupedItems, setGroupedItems] = useState();
  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [cartItems]);

  return (
    <View className="bg-white flex-1">
      <View className="relative py-4 shadow-sm ">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{backgroundColor: themeColors.bgColor(1)}}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2">
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>

        <View>
          <Text className="text-center font-bold text-xl ">Your Cart</Text>
          <Text className="text-center text-gray-400 font-bold">
            {restaurant.name}
          </Text>
        </View>
      </View>
      <View
        style={{backgroundColor: themeColors.bgColor(0.2)}}
        className="flex-row px-4 items-center ">
        <Image
          source={require('../assets/images/bikeGuy.png')}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4 font-bold">Delivery in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{color: themeColors.text}}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* dishes area */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="bg-white pt-5 ">
        {/* this is the pending area
 need to work on this  */}

        {restaurant.dishes.map((dish: any, index: any) => {
          return (
            <View
              key={index}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-2 shadow-md ">
              <Text className="font-bold " style={{color: themeColors.text}}>
                2 x
              </Text>
              <Image className="h-14 w-14 rounded-full " source={dish.image} />
              <Text className="flex-1 font-bold text-gray-700 ">
                {dish.name}
              </Text>
              <Text className="font-semibold text-base">₹{dish.price}</Text>
              <TouchableOpacity
                className="p-1 rounded-full "
                style={{backgroundColor: themeColors.bgColor(1)}}>
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke="white"
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      {/* total expndda*/}

      <View
        style={{backgroundColor: themeColors.bgColor(0.2)}}
        className="p-6  px-8 rounded-t-3xl space-y-4 ">
        <View className="flex-row justify-between ">
          <Text className="text-gray-700 ">Subtotal</Text>
          <Text className="text-gray-700 ">₹20.5</Text>
        </View>
        <View className="flex-row justify-between ">
          <Text className="text-gray-700 ">Delivery fee</Text>
          <Text className="text-gray-700 ">₹5</Text>
        </View>
        <View className="flex-row justify-between ">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">₹25.5</Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderPreparing')}
            style={{backgroundColor: themeColors.bgColor(1)}}
            className="p-3 rounded-full">
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});

function state(state: unknown): unknown {
  throw new Error('Function not implemented.');
}
// const {params} = useRoute();
// const navigation =
//   useNavigation<NativeStackNavigationProp<RootStackParamList>>();
// let item: any = params;
// console.log(item);
