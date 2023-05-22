import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

import {RootStackParamList} from '../App';

import * as Icon from 'react-native-feather';
import {themeColors} from '../theme';

import {useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import DishRow from '../components/DishRow';
import {Dish, Restaurant} from '../constants';
import CartIcon from '../components/CartIcon';
import {StatusBar} from 'react-native';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../slices/restaurantSlice';
// type restaurantProps = NativeStackScreenProps<RootStackParamList, 'Restaurant'>;

const RestaurantScreen = () => {


  const {params} = useRoute();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  let item: any = params;
  // console.log('restaurant: ', item);
const dispatch=useDispatch();

useEffect(()=>{
if(item && item.id)
{
  dispatch(setRestaurant({...item}))
}


}),[]









  return (
    <View>
      <CartIcon />
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72 " source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-1 left-4 bg-gray-50 p-2 rounded-full shadow border-red-800 ">
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
          className="bg-white -mt-12 pt-6">
          <View className="px-5">
            <Text className="text-3xl font-bold ">{item.name}</Text>

            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center  space-x-1">
                <Image
                  source={require('../assets/images/fullStar.png')}
                  className="h-4 w-4  "
                />

                <Text className="text-xs">
                  <Text className="text-green-700">{item.stars} </Text>
                  <Text className="text-gray-700 ">
                    ({item.reviews} reviews )
                    <Text className="font-semibold">{item.category}</Text>
                  </Text>
                </Text>
              </View>

              <View className="flex-row items-center space-x-1 ">
                <Icon.MapPin color="gray" width="15" height="15" />
                <Text className="text-gray-700 text-xs">
                  NearBy {item.address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 ">{item.description}</Text>
          </View>
        </View>

        <View className="pb-36 bg-white ">
          <Text className="px-4 py-4 text-2xl font -bold">Menu </Text>
          {item.dishes.map((dish: any, index: number) => (
            <DishRow item={{...dish}} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
