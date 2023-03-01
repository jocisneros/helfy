// start-page.tsx

import { Fragment, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, ScrollView, TouchableHighlight, TextInput } from 'react-native';
import { Height, StartPageNavigationProp } from '../types';
import { Picker } from '@react-native-picker/picker';
import { Space } from '../components/space';

export const StartPage = ({ route, navigation }: StartPageNavigationProp) => {
  const [weight, setWeight] = useState<number>(100);
  const [height, setHeight] = useState<Height>({
    feet: 5,
    inches: 4,
  });
  const [age, setAge] = useState(20);
  const [sex, setSex] = useState("Female");

  return (
    <SafeAreaView style={styles.container}>
        <Text style={[styles.sectionTitle, { fontSize: 36 }]}>{'helfy 🥭'}</Text>
        <View style={styles.sectionLabel}>
            <Text style={styles.sectionTitle}>{'your personal gym partner'}</Text>
        </View>
        <View style={styles.formContainer}>
            {/* <Text style={styles.sectionTitle}>{'please input your information'}</Text> */}
            <View style={styles.formRow}>
                <Text style={styles.formLabelText}>{'weight: '}</Text>
                <View style={styles.formInputContainer}>
                    <TextInput
                        returnKeyType='done'
                        style={styles.textInput}
                        keyboardType='numeric'
                        onChangeText={(text) => {
                            setWeight(parseFloat(text || '0'))
                        }}
                        value={weight ? weight.toString() : undefined}
                        maxLength={4}
                    />
                    <Text style={styles.formDescriptorText}>{'lbs'}</Text>
                </View>
            </View>
            <View style={styles.formRow}>
                <Text style={styles.formLabelText}>{'height: '}</Text>
                <View style={styles.formInputContainer}>
                    <View style={styles.formSubField}>
                        <Picker
                            style={styles.picker}
                            mode='dropdown'
                            selectedValue={height.feet}
                            onValueChange={(ft) => setHeight(prevHeight => ({...prevHeight, feet: ft}))}
                            >
                            {[...Array(8).keys()].slice(3).map(n => (
                                <Picker.Item label={n.toString()} value={n} color='white' key={n} />
                            ))}
                        </Picker>
                        <Text style={styles.formDescriptorText}>{'feet'}</Text>
                    </View>
                    <View style={styles.formSubField}>
                        <Picker
                            style={styles.picker}
                            mode='dropdown'
                            selectedValue={height.inches}
                            onValueChange={(inch) => setHeight(prevHeight => ({...prevHeight, inches: inch}))}
                        >
                            {[...Array(12).keys()].map(n => (
                                <Picker.Item label={n.toString()} value={n} color='white' key={n} />
                            ))}
                        </Picker>
                        <Text style={styles.formDescriptorText}>{'inches'}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.formRow}>
                <Text style={styles.formLabelText}>{'age: '}</Text>
                <View style={styles.formInputContainer}>
                    <Picker
                        style={styles.picker}
                        mode='dropdown'
                        selectedValue={age}
                        onValueChange={(itemValue) => setAge(itemValue)}
                    >
                        {[...Array(100).keys()].slice(16).map(n => (
                        <Picker.Item label={n.toString()} value={n} color='white' key={n} />
                        ))}
                    </Picker>
                    <Text style={styles.formDescriptorText}>{'years'}</Text>
                </View>
            </View>
            <View style={styles.formRow}>
                <Text style={styles.formLabelText}>{'sex: '}</Text>
                <View style={styles.formInputContainer}>
                    <Picker
                        style={[styles.picker, { width: 130 }]}
                        mode='dropdown'
                        selectedValue={sex}
                        onValueChange={(itemValue) => setSex(itemValue)}
                    >
                        <Picker.Item label='Female' value='Female' color='white' />
                        <Picker.Item label='Male' value='Male' color='white' />
                        <Picker.Item label='Other' value='Other' color='white' />
                    </Picker>
                </View>
            </View>
        </View>
        <TouchableHighlight
            onPress={() => navigation.navigate('Schedule', {
                weight: weight,
                height: height,
                sex: sex,
                age: age
              })}
            style={styles.nextButton}
            underlayColor={styles.nextButton.backgroundColor + '80'}
        >
            <Text style={styles.sectionTitle}>{'NEXT'}</Text>
        </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: '#303730',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    sectionLabel: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#242424',
        marginBottom: 20,
        paddingHorizontal: 24,
        borderRadius: 16,
        paddingVertical: 12,
    },
    sectionTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 20,
        color: 'white',
    },
    formContainer: {
        height: '70%',
        width: '90%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#242424',
        borderTopRightRadius: 12,
        borderBottomRightRadius: 24,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 24,
    },
    nextButton: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#78CF81',
        paddingHorizontal: 24,
        borderRadius: 36,
        height: 36,
    },
    picker: {
        width: 85,
        height: 110,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    textInput: {
        textAlign: 'center',
        fontSize: 20,
        color: '#CCCCCC',
        backgroundColor: '#FFFFFF0B',
        width: 85,
        paddingHorizontal: 18,
        paddingVertical: 14,
        borderRadius: 12,
        marginHorizontal: 8,
    },
    formRow: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    formLabelText: {
        fontFamily: 'Lato_700Bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'right',
        flex: 0.75,
    },
    formDescriptorText: {
        fontFamily: 'Lato_700Bold',
        fontSize: 16,
        color: 'white',
    },
    formSubField: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2,
    }
});
