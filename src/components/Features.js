import React from 'react';
import { TouchableOpacity, StyleSheet, FlatList, Image, Text, Dimensions } from 'react-native';

export default function Features({ icon, style }) {
    return (
        <TouchableOpacity style={{ ...styles.feature, ...style }}>
            {icon}
        </TouchableOpacity>
    )
}

const { width, height } = Dimensions.get('screen');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    feature: {
        width: mainWidth / 7,
        height: mainWidth / 7,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    }
})