import { Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  MapIcon
} from 'react-native-heroicons/outline'
import {
  StarIcon
} from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className='mr-3 bg-white shadow'
      onPress={()=>{
        navigation.navigate("Restaurant",{
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat
        })
      }}
    >
      <Image
        source={{
          uri:urlFor(imgUrl).url(),
        }}
        className='h-36 w-64 rounded-sm'
      />
      <View
        className='px-3 pb-4'
      >
        <Text className='text-lg pt-2 font-bold'>{title}</Text>
        <View className='flex-row space-x-1 items-center'>
          <StarIcon color='green' opacity={0.5}/>
          <Text className='text-xs text-gray-500'>
            <Text className='text-green-500'>{rating}</Text> - {genre}
          </Text>
        </View>
        <View className='flex-row items-center space-x-1'>
          <MapIcon color='gray' opacity={0.4} size={22}/>
          <Text className='text-xs text-gray-500'>Nearby - {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard