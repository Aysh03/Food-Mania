import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {StatusBar} from 'react-native';
import * as Icon from 'react-native-feather';
import {themeColors} from '../theme';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import {featured} from '../constants';

// import { TextInput } from 'react-native-gesture-handler';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white ">
      <StatusBar barStyle="dark-content" />
      <View className="flex-row item-center space-x-2 px-4 pb-2">
        <View className="flex-row  flex-1 items-center mt-3 p-1 px-3  rounded-full border border-gray-300">
          <Icon.Search
            height="25"
            width="25"
            stroke="gray"
            className="items-start"
          />
          <TextInput placeholder="Restaurants" className=" ml-2 flex-1 " />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">New York,NYC</Text>
          </View>
        </View>

        {/* <View className=' px-3 py-0 rounded-full bg-orange-300  justify-center item-center'> 
<Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" /> */}

        <View
          className=" mt-5"
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: themeColors.bgColor(1),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon.Sliders
            height="20"
            width="20"
            strokeWidth={2.0}
            stroke="white"
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}>
        {/* all the categories are here */}

        <Categories />

        {/* all the features are here */}
        <View className="mt-5">
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
