import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, contentContainerStyle, textStyle, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className=
                        {`bg-secondary rounded-xl min-h-[60px] justify-center items-center 
                            ${contentContainerStyle} ${isLoading ? 'optiona-50':''}`}
            disabled={isLoading}
                            >
            <Text className={`text-primary font-psemibold text-lg ${textStyle}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton