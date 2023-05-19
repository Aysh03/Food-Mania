import { StyleSheet, Text, View ,TouchableWithoutFeedback,Image} from 'react-native'
import React from 'react'

const RestaurantCard = ({ item }: { item: any }) => {
  return (
    <TouchableWithoutFeedback>

<View className='mr-6 bg-white rounded-3xl shadow-lg '>


<Image className='h-36 w-64 rounded-t-3xl ' source={item.image}/>
<View className='px-3 pb-4 space-y-2 '>

  <Text className='text-lg font-bold pt-2 '>
{item.name}
  </Text>
</View>

</View>


      
    </TouchableWithoutFeedback>
  )
}

export default RestaurantCard

const styles = StyleSheet.create({

})