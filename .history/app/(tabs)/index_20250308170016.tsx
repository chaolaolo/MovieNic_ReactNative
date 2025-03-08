import { images } from "@/constants/images";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg}/>
    </View>
  );
}
