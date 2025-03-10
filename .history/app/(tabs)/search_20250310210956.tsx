import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'

const Search = () => {
  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg}/>
    </View>
  )
}

export default Search