import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {themeColors} from '../theme';
import {RootStackParamList} from '../App';
import {useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {useDispatch, useSelector} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import type {RootState, AppDispatch} from '../store';
import {SelectedRestaurant} from '../slices/restaurantSlice';
import {selectBasketItems, selectBasketTotal} from '../slices/basketSlice';
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const CartIcon = (): JSX.Element => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const cartItems = useSelector(selectBasketItems);

  // console.log(cartItems);

  // if(!cartItems?.length) return;
  const cartTotal = useSelector(selectBasketTotal);

  return (
    <View className="absolute bottom-5 w-full z-50 ">
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={{backgroundColor: themeColors.bgColor(1)}}
        className="flex-row justify-between items-center p-4 py-3  mx-5 rounded-full shadow-lg ">
        <View
          className="p-2 px-4 rounded-full "
          style={{backgroundColor: 'rgba(255,255,255,0.3)'}}>
          <Text className="font-extrabold text-white text-lg">
            {cartItems.length}
          </Text>
        </View>
        <Text className="flex-1 justify-center items-center text-center font-extrabold  text-white text-lg">
          View Cart
        </Text>
        <Text className=" font-extrabold  text-white text-lg">
          ₹ {cartTotal}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;

const styles = StyleSheet.create({});
