// schedule-page.tsx

import React, { useCallback, useState, useMemo } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, SafeAreaView, Pressable, Button} from 'react-native';
import Modal from 'react-native-modal';
import { SchedulePageNavigationProp, MuscleGroup, WorkoutSchedule } from '../types';
import {
    CalendarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    PlusCircleIcon,
    ThreeDotsVerticalIcon
} from '../icons/icons';
import { MuscleGroupLabel } from '../components/muscle-group-label';
import { IconButton } from '../components/icon-button';
import { Picker } from '@react-native-picker/picker';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { HelfyModal } from '../components/helfy-modal';

type WorkoutDaySetter = (muscleGroup: MuscleGroup) => void;


export const SchedulePage = ({ route, navigation }: SchedulePageNavigationProp) => {
    const { weight, height, age, sex } = route.params;

    const [modalContents, setModalContents] = useState<React.ReactNode>(null)
    const [workoutSchedule, setWorkoutSchedule] = useState("");
    const[userWorkoutSchedule, setUserWorkoutSchedule] = useState<WorkoutSchedule>({
        sunday: MuscleGroup.None,
        monday: MuscleGroup.None,
        tuesday: MuscleGroup.None,
        wednesday: MuscleGroup.None,
        thursday: MuscleGroup.None,
        friday: MuscleGroup.None,
        saturday: MuscleGroup.None,
    });

    const saveUserInfo = useCallback(() => {
        const fileUri = FileSystem.documentDirectory + 'data.txt';

        let userInfo = {
            weight: weight,
            heightFeet: height.feet,
            heightInches: height.inches,
            age: age,
            sex: sex,
            UserWorkoutSchedule: userWorkoutSchedule
        };
        
        let userInfoStr = JSON.stringify(userInfo);

        FileSystem.writeAsStringAsync(fileUri, userInfoStr, {
            encoding: FileSystem.EncodingType.UTF8,
        });

        const UTI = 'public.text';

        Sharing.shareAsync(fileUri, {UTI}).catch((error) => {
            console.log(error);
        });

        navigation.navigate('Home')
    }, [navigation, userWorkoutSchedule])

    const onMuscleGroupLabelPress = useCallback((muscleGroup: MuscleGroup, setWorkoutDay: WorkoutDaySetter) => {
        setModalContents((
            <View style={{
                width: '80%',
                height: '60%',
                backgroundColor: '#445046',
                borderRadius: 16,
                alignItems: 'center',
                justifyContent: 'space-between',
                overflow: 'hidden',
            }}>
                <View style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#3C443C',
                    paddingVertical: 12,
                }}>
                    <Text style={{
                        fontFamily: 'Lato_700Bold',
                        fontSize: 20,
                        color: '#CFCFCF',
                    }}>{muscleGroup.toUpperCase()}</Text>
                </View>
                <View style={{
                    height: '90%',
                    justifyContent: 'space-evenly',
                }}>
                    <MuscleGroupLabel
                        muscleGroup={MuscleGroup.Legs}
                        onPress={() => setWorkoutDay(MuscleGroup.Legs)}
                    />
                    <MuscleGroupLabel
                        muscleGroup={MuscleGroup.Arms}
                        onPress={() => setWorkoutDay(MuscleGroup.Arms)}
                    />
                    <MuscleGroupLabel
                        muscleGroup={MuscleGroup.ChestAndBack}
                        onPress={() => setWorkoutDay(MuscleGroup.ChestAndBack)}
                    />
                    <MuscleGroupLabel
                        muscleGroup={MuscleGroup.Push}
                        onPress={() => setWorkoutDay(MuscleGroup.Push)}
                    />
                    <MuscleGroupLabel
                        muscleGroup={MuscleGroup.Pull}
                        onPress={() => setWorkoutDay(MuscleGroup.Pull)}
                    />
                    <MuscleGroupLabel
                        muscleGroup={MuscleGroup.UpperBody}
                        onPress={() => setWorkoutDay(MuscleGroup.UpperBody)}
                    />
                    <MuscleGroupLabel
                        muscleGroup={MuscleGroup.FullBody}
                        onPress={() => setWorkoutDay(MuscleGroup.FullBody)}
                    />
                    <MuscleGroupLabel
                        muscleGroup={MuscleGroup.None}
                        onPress={() => setWorkoutDay(MuscleGroup.None)}
                    />
                </View>
            </View>
        ));
    }, []);

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.sectionTitle}>{workoutSchedule} Work Schedule</Text>
        </View>
        <View style={styles.body}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>WORKOUTS</Text>
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
                        <Picker.Item label='1 Day' value='1 Day' color='#CFCFCF' />
                        <Picker.Item label='2 Days' value='2 Days' color='#CFCFCF' />
                        <Picker.Item label='3 Days' value='3 Days' color='#CFCFCF' />
                        <Picker.Item label='4 Days' value='4 Days' color='#CFCFCF' />
                        <Picker.Item label='5 Days' value='5 Days' color='#CFCFCF' />
                        <Picker.Item label='6 Days' value='6 Days' color='#CFCFCF' />
                    </Picker>
                </View>
            </View>
            <View style={styles.label}>
                <View style={{flex:.3}}>
                    <Text style={styles.text}>Sunday:</Text>
                </View>
                <View style={{flex:.3}}>
                    <MuscleGroupLabel
                        muscleGroup={userWorkoutSchedule.sunday}
                        onPress={() => onMuscleGroupLabelPress(userWorkoutSchedule.sunday, 
                            (muscleGroup: MuscleGroup) => {
                                setUserWorkoutSchedule(prevSchedule => ({...prevSchedule, sunday: muscleGroup}));
                            }
                        )}
                    />
                </View>
            </View>
            <View style={styles.label}>
                <View style={{flex:.3}}>
                    <Text style={styles.text}>Monday:</Text>
                </View>
                <View style={{flex:.3}}>
                    <MuscleGroupLabel
                        muscleGroup={userWorkoutSchedule.monday}
                        onPress={() => onMuscleGroupLabelPress(userWorkoutSchedule.monday, 
                            (muscleGroup: MuscleGroup) => {
                                setUserWorkoutSchedule(prevSchedule => ({...prevSchedule, monday: muscleGroup}));
                            }
                        )}
                    />
                </View>
            </View>
            <View style={styles.label}>
                <View style={{flex:.3}}>
                    <Text style={styles.text}>Tuesday:</Text>
                </View>
                <View style={{flex:.3}}>
                    <MuscleGroupLabel
                        muscleGroup={userWorkoutSchedule.tuesday}
                        onPress={() => onMuscleGroupLabelPress(userWorkoutSchedule.tuesday, 
                            (muscleGroup: MuscleGroup) => {
                                setUserWorkoutSchedule(prevSchedule => ({...prevSchedule, tuesday: muscleGroup}));
                            }
                        )}
                    />
                </View>
            </View>
            <View style={styles.label}>
                <View style={{flex:.3}}>
                    <Text style={styles.text}>Wednesday:</Text>
                </View>
                <View style={{flex:.3}}>
                    <MuscleGroupLabel
                        muscleGroup={userWorkoutSchedule.wednesday}
                        onPress={() => onMuscleGroupLabelPress(userWorkoutSchedule.wednesday, 
                            (muscleGroup: MuscleGroup) => {
                                setUserWorkoutSchedule(prevSchedule => ({...prevSchedule, wednesday: muscleGroup}));
                            }
                        )}
                    />
                </View>
            </View>
            <View style={styles.label}>
                <View style={{flex:.3}}>
                    <Text style={styles.text}>Thursday:</Text>
                </View>
                <View style={{flex:.3}}>
                    <MuscleGroupLabel
                        muscleGroup={userWorkoutSchedule.thursday}
                        onPress={() => onMuscleGroupLabelPress(userWorkoutSchedule.thursday, 
                            (muscleGroup: MuscleGroup) => {
                                setUserWorkoutSchedule(prevSchedule => ({...prevSchedule, thursday: muscleGroup}));
                            }
                        )}
                    />
                </View>
            </View>
            <View style={styles.label}>
                <View style={{flex:.3}}>
                    <Text style={styles.text}>Friday:</Text>
                </View>
                <View style={{flex:.3}}>
                    <MuscleGroupLabel
                        muscleGroup={userWorkoutSchedule.friday}
                        onPress={() => onMuscleGroupLabelPress(userWorkoutSchedule.friday, 
                            (muscleGroup: MuscleGroup) => {
                                setUserWorkoutSchedule(prevSchedule => ({...prevSchedule, friday: muscleGroup}));
                            }
                        )}
                    />
                </View>
            </View>
            <View style={styles.label}>
                <View style={{flex:.3}}>
                    <Text style={styles.text}>Saturday:</Text>
                </View>
                <View style={{flex:.3}}>
                    <MuscleGroupLabel
                        muscleGroup={userWorkoutSchedule.saturday}
                        onPress={() => onMuscleGroupLabelPress(userWorkoutSchedule.saturday, 
                            (muscleGroup: MuscleGroup) => {
                                setUserWorkoutSchedule(prevSchedule => ({...prevSchedule, saturday: muscleGroup}));
                            }
                        )}
                    />
                </View>
            </View>
        </View>
        <View style={styles.footer}>
          <Button
            title='Home'
            onPress={saveUserInfo}
          />
        </View>
      </SafeAreaView>
    );
}
  
const styles = StyleSheet.create({
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#2A302A',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Lato_400Regular',
    },
    header: {
        backgroundColor: '#3C443C',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        backgroundColor: '#445046',
        width: '95%',
        flex: 7,
        margin: 16,
        marginBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        overflow: 'hidden',
    },
    footer: {
        backgroundColor: '#445046',
        width: '95%',
        flex: 1,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        overflow: 'hidden',
    },
    workoutList: {
        display: 'flex',
        width: '100%',
        height: '75%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 20,
        color: '#CFCFCF',
    },
    sectionHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        backgroundColor: '#3C443C',
        paddingHorizontal: 20,
        paddingVertical: 6,
        top: 0,
    },
    iconButton: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 99,
    },
    text: {
        color: '#CFCFCF',
        fontFamily: 'Lato_700Bold',
    },
    picker: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign:'left',
    },
    label: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign:'left',
        margin: 6,
    },
});
