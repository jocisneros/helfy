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
      <Text style={styles.header}>Please Fill Out Information</Text>
      <View style={styles.picker}>
        <View style={{flex:.15}}>
          <Text>Weight:</Text>
          <Text>{weight} lbs.</Text>
        </View>
        <View style={{flex:.3}}>
          <Picker
            mode='dropdown'
            selectedValue={weight}
            onValueChange={(itemValue) => setWeight(itemValue)}
          >
            {[...Array(300).keys()].map(n => (
              <Picker.Item label={n.toString()} value={n} />
            ))}
          </Picker>
        </View>
      </View>
      <View style={styles.picker}>
        <View style={{flex:.15}}>
          <Text>Height:</Text>
          <Text>{height.feet} ft. {height.inches} in.</Text>
        </View>
        <View style={{flex:.3}}>
          <Picker
              mode='dropdown'
              selectedValue={height.feet}
              onValueChange={(ft) => setHeight(prevHeight => ({...prevHeight, feet: ft}))}
            >
              {[...Array(11).keys()].map(n => (
                <Picker.Item label={n.toString()} value={n} />
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
                <Picker.Item label={n.toString()} value={n} />
              ))}
          </Picker>
        </View>
      </View>
      <View style={styles.picker}>
        <View style={{flex:.15}}>
          <Text>Age:</Text>
          <Text>{age} years.</Text>
        </View>
        <View style={{flex:.2}}>
          <Picker
            mode='dropdown'
            selectedValue={age}
            onValueChange={(itemValue) => setAge(itemValue)}
          >
            {[...Array(100).keys()].map(n => (
              <Picker.Item label={n.toString()} value={n} />
            ))}
          </Picker>
        </View>
      </View>
      <View style={styles.picker}>
        <View style={{flex:.15}}>
          <Text>Sex:</Text>
          <Text>{sex}</Text>
        </View>
        <View style={{flex:.35}}>
          <Picker
            mode='dropdown'
            selectedValue={sex}
            onValueChange={(itemValue) => setSex(itemValue)}
          >
            <Picker.Item label='Female' value='Female' />
            <Picker.Item label='Male' value='Male' />
            <Picker.Item label='Other' value='Other' />
          </Picker>
        </View>
      </View>
      <View style={styles.picker}>
        <View style={{flex:.2}}>
          <Text>Workout Schedule:</Text>
          <Text>{workoutSchedule}</Text>
        </View>
        <View style={{flex:.3}}>
          <Picker
            mode='dropdown'
            selectedValue={workoutSchedule}
            onValueChange={(itemValue) => setWorkoutSchedule(itemValue)}
          >
            <Picker.Item label='1 day' value='1 day' />
            <Picker.Item label='2 day' value='2 day' />
            <Picker.Item label='3 day' value='3 day' />
            <Picker.Item label='4 day' value='4 day' />
            <Picker.Item label='5 day' value='5 day' />
            <Picker.Item label='6 day' value='6 day' />
          </Picker>
        </View>
      </View>
      <View>
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      fontSize: 20,
    },
    picker: {
      flexDirection: 'row',
      alignItems: 'center',
      textAlign:"left",
    }
});
