// start-page.tsx

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StartPageNavigationProp } from '../types';

export const StartPage = ({ route, navigation }: StartPageNavigationProp) => {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Please Input Information</Text>
        </View>
        {/* <View> */}
          <View style={styles.row}>
            <Text>Weight (lbs):</Text>
            <TextInput
              style={{height: 40}}
              placeholder="Enter Weight"
              // onChangeText={newText => setText(newText)}
              // defaultValue={text}
            />
          </View>
          {/* <View style={styles.row}>
            <Text>Weight (lbs):</Text>
            <TextInput
              style={{height: 40}}
              placeholder="Enter Weight"
              // onChangeText={newText => setText(newText)}
              // defaultValue={text}
            />
          </View>
        </View> */}
        <View>
          <Button
            title='Go to Home Screen'
            onPress={() =>
              navigation.navigate('Home')
            }
          />
        </View>
      </View>
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
      fontSize: 50,
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      // width: "wp('50%')",
      textAlign: 'left',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
});
