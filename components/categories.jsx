import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
    >
      {/* Category Cards */}
      <CategoryCard
        imgUrl='https://links.papareact.com/gn7'
        title='Sushi'
      />
      <CategoryCard
        imgUrl='https://links.papareact.com/gn7'
        title='Sushi'
      />
      <CategoryCard
        imgUrl='https://links.papareact.com/gn7'
        title='Sushi'
      />
      <CategoryCard
        imgUrl='https://links.papareact.com/gn7'
        title='Sushi'
      />
      <CategoryCard
        imgUrl='https://links.papareact.com/gn7'
        title='Sushi'
      />
      <CategoryCard
        imgUrl='https://links.papareact.com/gn7'
        title='Sushi'
      />
    </ScrollView>
  )
}

export default Categories