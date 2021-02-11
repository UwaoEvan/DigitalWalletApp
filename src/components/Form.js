import React, { useState, useEffect } from 'react';
import {
    View, StyleSheet, Text, Modal,
    Dimensions, TextInput, Image,
    TouchableWithoutFeedback, Keyboard,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';

export default function Form({ navigation }) {
    const [showPassword, setShowPassword] = useState(false);
    const [open, setOpen] = useState(false);
    const [areas, setAreas] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => {
                const resData = data.map(item => {
                    return {
                        code: item.alpha2Code,
                        name: item.name,
                        prefix: `+${item.callingCodes[0]}`,
                        flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`
                    }
                })
                setAreas(resData)
            })
    }, [])
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        placeholder='Enter Your Full Name'
                        placeholderTextColor='#fff'
                        selectionColor='#fff'
                        style={styles.input}
                    />
                </View>

                <View style={styles.codesContainer}>
                    <TouchableWithoutFeedback
                        onPress={() => setOpen(true)}
                    >
                        <View style={styles.codes}>
                            <Entypo
                                name="chevron-small-down"
                                size={24}
                                color="#fff"
                            />
                            {!selected ? (
                                <>
                                    <Image
                                        source={require('../../assets/images/us-flag.jpg')}
                                        style={styles.flag}
                                    />
                                    <Text style={{ color: '#fff', paddingLeft: 5 }}>US+1</Text>
                                </>
                            ) : (
                                    <>
                                        <Image
                                            source={{ uri: selected?.flag }}
                                            style={styles.flag}
                                        />
                                        <Text style={{ color: '#fff', paddingLeft: 5 }}>{selected?.prefix}</Text>
                                    </>
                                )}

                        </View>
                    </TouchableWithoutFeedback>

                    {/* Modal */}

                    <Modal
                        animationType='slide'
                        visible={open}
                        transparent={true}
                    >

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={styles.modaleContent}>
                                <TouchableWithoutFeedback
                                    onPress={() => setOpen(false)}
                                >
                                    <AntDesign name="close" size={15} color="black" style={{ paddingLeft: 10, paddingTop: 10, paddingBottom: 10 }} />
                                </TouchableWithoutFeedback>
                                <FlatList
                                    data={areas}
                                    keyExtractor={(item) => item.code}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            style={styles.flags}
                                            onPress={() => {
                                                setSelected(item)
                                                setOpen(false)
                                            }
                                            }
                                        >
                                            <Image source={{ uri: item.flag }}
                                                resizeMode='contain'
                                                style={{ width: 30, height: 30 }}
                                            />
                                            <Text style={styles.flagsName}>{item.name}</Text>
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>
                        </View>
                    </Modal>
                    <View style={styles.phone}>
                        <TextInput
                            placeholder='0707341617'
                            placeholderTextColor='#fff'
                            selectionColor='#fff'
                            style={styles.input}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        placeholder='Enter Your Password'
                        placeholderTextColor='#fff'
                        selectionColor='#fff'
                        style={styles.input}
                        secureTextEntry={showPassword}
                    />
                    <View style={styles.eye}>
                        {showPassword ? (
                            <Ionicons
                                name="eye-outline"
                                size={18}
                                color="#fff"
                                onPress={() => setShowPassword(!showPassword)}
                            />
                        ) : (
                                <Ionicons
                                    name="eye-off-outline"
                                    size={18}
                                    color="#fff"
                                    onPress={() => setShowPassword(!showPassword)}
                                />
                            )}

                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
                    <Text style={styles.title}>Continue</Text>
                </TouchableOpacity>
            </View >
        </TouchableWithoutFeedback >
    )
}

const { width, height } = Dimensions.get('screen');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: mainWidth / 10,
        marginRight: mainWidth / 10
    },
    label: {
        color: '#fff',
        paddingBottom: 10,
        fontFamily: 'Nunito-Regular'
    },
    input: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        height: mainHeight / 20,
        paddingBottom: 10
    },
    flag: {
        width: mainWidth / 10,
        height: mainHeight / 35
    },
    codesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    codes: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        marginRight: 10,
        height: mainHeight / 20,
        paddingBottom: 10
    },
    phone: {
        flex: 1,
        height: mainHeight / 20,
        justifyContent: 'center',
        paddingBottom: 2
    }, eye: {
        position: 'absolute',
        marginLeft: mainWidth / 1.35,
        marginTop: mainHeight / 32
    },
    button: {
        backgroundColor: '#000',
        borderRadius: 20,
        marginTop: mainHeight / 10
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        padding: 20,
        fontFamily: 'Nunito-Bold'
    },
    modaleContent: {
        backgroundColor: '#fff',
        width: mainWidth / 1.5,
        height: mainHeight / 3,
        borderRadius: 10,
        shadowColor: '#333',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3
    },
    flags: {
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5
    },
    flagsName: {
        fontFamily: 'Nunito-Regular',
        marginLeft: 5
    }
})