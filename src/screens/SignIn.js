import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import Form from '../components/Form';

export default function SignIn({ navigation }) {

    return (
        <LinearGradient
            colors={['#26c165', '#26c165']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>

                {/* Logo */}

                <Image
                    source={require('../../assets/images/wallie-logo.png')}
                    resizeMode='contain'
                    style={styles.logo}
                />

                {/* Header Icons and Text */}

                <View style={styles.headerIcons}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </View>
                <Text style={styles.headerText}>Sign Up</Text>

                {/* Sign Up Form */}

                <Form navigation={navigation} />
            </View>
        </LinearGradient>
    )
}

const { width, height } = Dimensions.get('screen');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        width: mainWidth / 1.8,
        height: mainHeight / 3,
        marginLeft: mainWidth / 5,
        marginRight: mainWidth / 5,
    },
    headerIcons: {
        position: 'absolute',
        marginTop: mainWidth / 10,
        marginLeft: mainWidth / 10,
    },
    headerText: {
        position: 'absolute',
        marginTop: mainWidth / 8.8,
        marginLeft: mainWidth / 6,
        color: '#fff',
        fontFamily: 'Nunito-Regular'
    }
})