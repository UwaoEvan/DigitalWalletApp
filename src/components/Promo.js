import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, Dimensions, View } from 'react-native';

export default function Promo({ item }) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image
                    source={item.image}
                    resizeMode='cover'
                    style={styles.image}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const { width, height } = Dimensions.get('screen');
const mainWidth = width;
const mainHeight = height;

const styles = StyleSheet.create({
    container: {
        width: mainWidth / 2.6,
        height: mainHeight / 5,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#fff',
        shadowColor: '#333',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginVertical: 6,
        marginHorizontal: 4
    },
    image: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%',
        height: '50%',
    },
    title: {
        fontFamily: 'Nunito-Bold',
        textAlign: 'center',
    },
    description: {
        fontFamily: 'Nunito-Regular',
        padding: 5
    }
})