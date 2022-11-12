import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { urlFor } from '../sanity'

function CategoryCard({imgUrl, title}) {
  return (
    <TouchableOpacity
      className='relative mr-2'
    >
      <Image
        source={{uri:urlFor(imgUrl).url()}}
        className='h-20 w-40 rounded'
      />
      <Text
        className='absolute bottom-1 left-1 text-white font-bold'
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoryCard