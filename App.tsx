import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from './screens/CartScreen';
import OrderPreparing from './screens/OrderPreparingScreen';
import DeliveryScreen from './screens/DeliveryScreen';

import {Provider} from 'react-redux';
import {store} from './store';

export type RootStackParamList = {
  Home: undefined;
  Restaurant: {id: string};
  Cart: undefined;
  OrderPreparing: undefined;
  Delivery: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />

          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{title: 'Cart'}}
          />

          <Stack.Screen
            name="Restaurant"
            component={RestaurantScreen}
            options={{
              title: 'Restaurant',
            }}
          />

          <Stack.Screen
            name="OrderPreparing"
            component={OrderPreparing}
            options={{title: 'OrderPreparing', presentation: 'fullScreenModal'}}
          />
          <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{title: 'Delivery', presentation: 'fullScreenModal'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
