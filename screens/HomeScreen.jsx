import React, {useLayoutEffect} from 'react';
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])

  return (
    //The safe area view set all the content below the top bar on phones.
    <SafeAreaView className='bg-white pt-5'>
      {/* Header */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{uri:'https://links.papareact.com/wru'}}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
          <MagnifyingGlassIcon color='gray' size={20}/>
          <TextInput
            placeholder='Restaurants and cuisines'
            keyboardType='default'
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB"/>
      </View>
      {/* Body */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100
        }}
        className='bg-gray-100 '
      >
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        <FeaturedRow
          id='1'
          title='Kchay Restaurants'
          description='Place payments for our partners'
        />
        <FeaturedRow
          id='2'
          title='Tasty Discounts'
          description='Everyone is been enjoying these juicy discounts'
        />
        <FeaturedRow
          id='3'
          title='Offers near you!'
          description='Why not support your local restaurant tonight!'
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;