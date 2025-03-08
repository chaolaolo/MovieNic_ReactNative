import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { icons } from '@/constants/icons'

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: Movie) => {
    console.log("poster_path", poster_path)
    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className="w-[30%]">
                <Image source={{
                    uri: poster_path
                        ?
                        `https://image.tmdb.org/t/p/w500${poster_path}`
                        :
                        `https://placehold.co/600x400/1a1a1a/ffffff.pngF`
                }}
                    className="w-full h-52 rounded-lg"
                    resizeMode='cover'
                />
                {/* <View className="p-4"> */}
                <Text className="text-sm font-bold text-white mt-2">{title}</Text>
                <View className='flex-row items-center justify-start gap-x-1'>
                    <Image source={icons.star} className='size-4' />
                    <Text className="text-white text-sx font-bold uppercase">{Math.round(vote_average / 2)}/5</Text>
                </View>
                <Text className="text-gray-600 text-xs">{release_date.split('-')[0]}</Text>
                {/* </View> */}
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard