import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function Scan({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <MaterialIcons name="flip-camera-ios" size={30} color="#e8fff1" />
                    </TouchableOpacity>
                </View>
            </Camera>

            {/* Camera Top Icons */}

            <View style={styles.close}>
                <MaterialIcons
                    name="close"
                    size={24}
                    color="#fff"
                    onPress={() => navigation.navigate('Dashboard')}
                />
            </View>

            <View style={styles.focus}>
                <Image
                    source={require('../../assets/images/focus.png')}
                    resizeMode='stretch'
                    style={styles.focusImage}
                />
            </View>
            <View style={styles.bottomBanner}>
                <Text style={styles.title}>Another Payment Option</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.bottomIcon}>
                        <View style={styles.phoneNumber}>
                            <FontAwesome name="mobile" size={30} color="#8e6af1" />
                        </View>
                        <Text style={{ paddingLeft: 5 }}>Phone Number</Text>
                    </View>
                    <View style={styles.bottomIcon}>
                        <View style={styles.barcode}>
                            <FontAwesome name="barcode" size={26} color="#26c165" />
                        </View>
                        <Text style={{ paddingLeft: 5 }}>Barcode</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const { width, height } = Dimensions.get('screen');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        marginTop: mainHeight / 1.8,
        marginLeft: 20
    },
    button: {
        position: 'absolute',
        marginTop: 50
    },
    text: {
        fontSize: 18,
        color: 'white',

    },
    bottomBanner: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        width: mainWidth,
        height: mainHeight / 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    bottomIcon: {
        paddingTop: mainHeight / 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
        paddingTop: 15
    },
    focus: {
        position: 'absolute',
        marginTop: mainHeight / 4,
        marginLeft: mainWidth / 4,
        marginRight: mainWidth / 4,
    },
    focusImage: {
        width: mainWidth / 1.8,
        height: mainWidth / 1.8
    },
    close: {
        position: 'absolute',
        marginTop: mainHeight / 20,
        marginLeft: mainWidth / 20
    },
    barcode: {
        width: 35,
        height: 35,
        backgroundColor: '#e8fff1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    phoneNumber: {
        width: 35,
        height: 35,
        backgroundColor: '#f3efff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    }
});