import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image } from 'react-native';
import {
    FontAwesome5, Entypo, SimpleLineIcons, FontAwesome, AntDesign, MaterialIcons
} from '@expo/vector-icons';

import Promo from '../components/Promo';
import Features from '../components/Features';

export default function Dashboard({ navigation }) {
    const promo = require('../../assets/images/promo-banner.png')
    const prodata = [
        { id: '1', title: 'Promo', image: promo, description: 'Don\'t miss it! Grab it while stock lasts' },
        { id: '2', title: 'Promo', image: promo, description: 'Don\'t miss it! Grab it while stock lasts' },
        { id: '3', title: 'Promo', image: promo, description: 'Don\'t miss it! Grab it while stock lasts' },
        { id: '4', title: 'Promo', image: promo, description: 'Don\'t miss it! Grab it while stock lasts ' },
    ];

    const headerComponent = () => {
        return (
            <>
                {/* Header */}

                <View style={{ paddingBottom: 10 }}>
                    <Text style={styles.heading}>Hello</Text>
                    <Text style={styles.username}>Evan Mwanjala Uwao</Text>
                    <FontAwesome5
                        name="bell"
                        size={24}
                        color="black"
                        style={styles.bell}
                        onPress={() => navigation.navigate('SignIn')}
                    />
                    <Entypo
                        name="dot-single"
                        size={24}
                        color="red"
                        style={styles.dot}
                    />
                </View>

                {/* Banner */}
                <View style={styles.shadow}>
                    <Image
                        source={require('../../assets/images/banner.png')}
                        resizeMode='cover'
                        style={styles.banner}
                    />
                </View>
                {/* Features */}
                <Text style={styles.title}>Features</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Features
                            icon={<SimpleLineIcons name="reload" size={24} color="#9771ff" />}
                            style={{ backgroundColor: '#f3efff' }}
                        />
                        <Text style={styles.iconTitle}>Top Up</Text>
                    </View>

                    <View>
                        <Features
                            icon={<FontAwesome name="send" size={24} color="#ffc962"
                            />}
                            style={{ backgroundColor: '#fff9ec' }}
                        />
                        <Text style={styles.iconTitle}>Transfer</Text>
                    </View>

                    <View>
                        <Features
                            icon={<AntDesign name="earth" size={24} color="#71d99c" />}
                            style={{ backgroundColor: '#e8fff1' }}
                        />
                        <Text style={styles.iconTitle}>Internet</Text>
                    </View>

                    <View>
                        <Features
                            icon={<MaterialIcons name="account-balance-wallet" size={24} color="#ff4133" />}
                            style={{ backgroundColor: '#fff1f0' }}
                        />
                        <Text style={styles.iconTitle}>Wallet</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Features
                            icon={<FontAwesome5 name="briefcase" size={24} color="#ffc75e" />}
                            style={{ backgroundColor: '#fff9ec' }}
                        />
                        <Text style={styles.iconTitle}>Bill</Text>
                    </View>

                    <View>
                        <Features
                            icon={<Entypo name="game-controller" size={24} color="#26c165" />}
                            style={{ backgroundColor: '#e8fff1' }}
                        />
                        <Text style={styles.iconTitle}>Games</Text>
                    </View>

                    <View>
                        <Features
                            icon={<Entypo name="mobile" size={24} color="#ff574b" />}
                            style={{ backgroundColor: '#fff1f0' }}
                        />
                        <Text style={styles.iconTitle}>Mobile</Text>
                    </View>

                    <View>
                        <Features
                            icon={<MaterialIcons name="read-more" size={24} color="#6c3ced" />}
                            style={{ backgroundColor: '#f3efff' }}
                        />
                        <Text style={styles.iconTitle}>More</Text>
                    </View>
                </View>

                {/* Promo */}

                <Text style={styles.title}>Special Promo</Text>
            </>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={headerComponent}
                data={prodata}
                renderItem={({ item }) => <Promo item={item} />}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const { width, height } = Dimensions.get('screen');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: mainWidth / 10,
        marginRight: mainWidth / 10,
        marginTop: mainHeight / 20
    },
    banner: {
        width: mainWidth / 1.25,
        height: mainHeight / 6,
        borderRadius: 20
    },
    bell: {
        position: 'absolute',
        marginLeft: mainWidth / 1.4,
        marginTop: 20
    },
    dot: {
        position: 'absolute',
        marginLeft: mainWidth / 1.35,
    },
    heading: {
        fontFamily: 'Nunito-Bold',
        fontSize: 30
    },
    title: {
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10
    },
    username: {
        fontFamily: 'Nunito-Regular',
        color: 'gray',
    },
    iconTitle: {
        fontFamily: 'Nunito-Regular',
        textAlign: 'center',
        paddingBottom: 10
    }
})