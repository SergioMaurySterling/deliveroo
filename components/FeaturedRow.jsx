import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import {
  ArrowRightIcon
} from 'react-native-heroicons/outline'

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

      </ScrollView>
    </View>
  )
}

export default FeaturedRow