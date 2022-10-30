import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import {
  ArrowRightIcon
} from 'react-native-heroicons/outline'
import RestaurantCard from '../components/RestaurantCard';

function FeaturedRow({id, title, description}) {
  return (
    <View>
      <View className='flex-row mt-4 px-4 items-center justify-between'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB"/>
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        className='pt-4'
      >
        {/* RestaurantCards */}
        <RestaurantCard
          id={123}
          imgUrl='https://links.papareact.com/gn7'
          title='Yo! Sushi!'
          rating={4.5}
          genre="Japanese"
          address='123 Main Street'
          short_description='The best sushi in Japan'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl='https://links.papareact.com/gn7'
          title='Yo! Sushi!'
          rating={4.5}
          genre="Japanese"
          address='123 Main Street'
          short_description='The best sushi in Japan'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl='https://links.papareact.com/gn7'
          title='Yo! Sushi!'
          rating={4.5}
          genre="Japanese"
          address='123 Main Street'
          short_description='The best sushi in Japan'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl='https://links.papareact.com/gn7'
          title='Yo! Sushi!'
          rating={4.5}
          genre="Japanese"
          address='123 Main Street'
          short_description='The best sushi in Japan'
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow