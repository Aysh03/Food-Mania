// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// import 'react-native-gesture-handler';
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text className="text-red-900 font-bold ">
//         Hello
//       </Text>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
// });
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './Navigation'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
   
   <Navigation/>
  
  )
}

export default App

const styles = StyleSheet.create({})