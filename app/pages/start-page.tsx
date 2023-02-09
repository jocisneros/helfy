// start-page.tsx

import { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { StartPageNavigationProp } from '../types';
import {Picker} from '@react-native-picker/picker';

type Height = {
  feet: number,
  inches: number
}

export const StartPage = ({ route, navigation }: StartPageNavigationProp) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState<Height>({
    feet: 0,
    inches: 0,
  });
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [workoutSchedule, setWorkoutSchedule] = useState("");


  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to Helfy </Text>
          <Text style={styles.headerInfo}>Your Personal Gym Partner!</Text>
          <Text style={styles.headerInfo}>Please Fill Out Information</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.picker}>
            <View style={{flex:.15}}>
              <Text style={styles.text}>Weight:</Text>
              <Text style={styles.text}>{weight} lbs.</Text>
            </View>
            <View style={{flex:.3}}>
              <Picker
                mode='dropdown'
                selectedValue={weight}
                onValueChange={(itemValue) => setWeight(itemValue)}
              >
                {[...Array(301).keys()].map(n => (
                  <Picker.Item label={n.toString()} value={n} color='#CFCFCF' />
                ))}
              </Picker>
            </View>
          </View>
          <View style={styles.picker}>
            <View style={{flex:.2}}>
              <Text style={styles.text}>Height:</Text>
              <Text style={styles.text}>{height.feet} ft. {height.inches} in.</Text>
            </View>
            <View style={{flex:.3}}>
              <Picker
                  mode='dropdown'
                  selectedValue={height.feet}
                  onValueChange={(ft) => setHeight(prevHeight => ({...prevHeight, feet: ft}))}
                >
                  {[...Array(11).keys()].map(n => (
                    <Picker.Item label={n.toString()} value={n} color='#CFCFCF' />
                  ))}
              </Picker>
            </View>
            <View style={{flex:.3}}>
              <Picker
                  mode='dropdown'
                  selectedValue={height.inches}
                  onValueChange={(inch) => setHeight(prevHeight => ({...prevHeight, inches: inch}))}
                >
                  {[...Array(12).keys()].map(n => (
                    <Picker.Item label={n.toString()} value={n} color='#CFCFCF' />
                  ))}
              </Picker>
            </View>
          </View>
          <View style={styles.picker}>
            <View style={{flex:.15}}>
              <Text style={styles.text}>Age:</Text>
              <Text style={styles.text}>{age} years.</Text>
            </View>
            <View style={{flex:.3}}>
              <Picker
                mode='dropdown'
                selectedValue={age}
                onValueChange={(itemValue) => setAge(itemValue)}
              >
                {[...Array(100).keys()].map(n => (
                  <Picker.Item label={n.toString()} value={n} color='#CFCFCF' />
                ))}
              </Picker>
            </View>
          </View>
          <View style={styles.picker}>
            <View style={{flex:.15}}>
              <Text style={styles.text}>Sex:</Text>
              <Text style={styles.text}>{sex}</Text>
            </View>
            <View style={{flex:.40}}>
              <Picker
                mode='dropdown'
                selectedValue={sex}
                onValueChange={(itemValue) => setSex(itemValue)}
              >
                <Picker.Item label='Female' value='Female' color='#CFCFCF' />
                <Picker.Item label='Male' value='Male' color='#CFCFCF' />
                <Picker.Item label='Other' value='Other' color='#CFCFCF' />
              </Picker>
            </View>
          </View>
          <View style={styles.picker}>
            <View style={{flex:.2}}>
              <Text style={styles.text}>Workout Schedule:</Text>
              <Text style={styles.text}>{workoutSchedule}</Text>
            </View>
            <View style={{flex:.4}}>
              <Picker
                mode='dropdown'
                selectedValue={workoutSchedule}
                onValueChange={(itemValue) => setWorkoutSchedule(itemValue)}
              >
                <Picker.Item label='1 day' value='1 day' color='#CFCFCF' />
                <Picker.Item label='2 day' value='2 day' color='#CFCFCF' />
                <Picker.Item label='3 day' value='3 day' color='#CFCFCF' />
                <Picker.Item label='4 day' value='4 day' color='#CFCFCF' />
                <Picker.Item label='5 day' value='5 day' color='#CFCFCF' />
                <Picker.Item label='6 day' value='6 day' color='#CFCFCF' />
              </Picker>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Button
            title='Go to Home Screen'
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </ScrollView>
  );
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#303730',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      backgroundColor: '#445046',
      width: '90%',
      flex: 7,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 40,
      margin: 20,
      padding: 20,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#CFCFCF',
    },
    headerInfo: {
      fontSize: 20,
      color: '#CFCFCF',
    },
    body: {
      backgroundColor: '#445046',
      width: '90%',
      flex: 7,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 40,
    },
    text: {
      color: '#CFCFCF',
    },
    picker: {
      flexDirection: 'row',
      alignItems: 'center',
      textAlign:'left',
    },
    footer: {
      backgroundColor: '#445046',
      width: '90%',
      flex: 7,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 40,
      margin: 20,
      padding: 20,
    }
});
