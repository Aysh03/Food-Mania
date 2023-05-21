import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {RootStackParamList} from '../App';

import * as Icon from 'react-native-feather';
import {themeColors} from '../theme';

import {useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const OrderPreparingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 2000);
  }, []);

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        source={require('../assets/images/OrderPlaced.gif')}
        className="w-40 h-40"
      />
      <Text className="font-extrabold text-2xl text-gray-700">
        {' '}
        Order Placed
      </Text>
    </View>
  );
};

export default OrderPreparingScreen;

const styles = StyleSheet.create({});
