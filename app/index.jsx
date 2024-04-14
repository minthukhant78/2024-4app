import React from "react";
import { View,Text } from "react-native";
import {Link} from "expo-router"; 

export default function App () {
    return (
        <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-3xl">Hello</Text>
        <Link href="/profile" style={{ color: 'blue'}}>Go To Profile</Link>
        </View>
    )
}
