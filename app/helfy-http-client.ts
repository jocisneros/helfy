// helfy-http-client.ts

import axios, { AxiosResponse } from 'axios';
import { SelectedWorkout, UserData, Workout, WorkoutHistoryResponse, WorkoutType } from './types';
import { format } from 'date-fns';

import Constants from "expo-constants";

const { manifest } = Constants;

const BASE_URL = `http://${manifest!.debuggerHost!.split(':').shift()}:8888`;

export class HelfyHttpClient {

    static async postUser(user: UserData): Promise<void> {
        const userForm = new FormData();
        userForm.append('id', user.id)
        userForm.append('height', user.height.feet * 12 + user.height.inches + '')
        userForm.append('weight', user.weight + '')
        userForm.append('sex', user.sex)
        userForm.append('experienceLevel', user.experienceLevel + '')

        const response = await axios.post(BASE_URL + '/adduser', userForm);
        return;
    }

    static async getWorkoutHistory(id: string, date: Date): Promise<SelectedWorkout[]> {
        const response = await axios.get< any, AxiosResponse<WorkoutHistoryResponse[]> >(
            BASE_URL + `/workouthistory?id=${encodeURIComponent(id)}&date=${encodeURIComponent(format(date, 'yyyy-MM-dd'))}`
        );

        return response.data.map(workoutResponse => ({
            ...workoutResponse,
            repititionCount: workoutResponse.reps,
            setCount: workoutResponse.sets,
            difficulty: 0,
            link: '',
            tips: '',
        }));
    }

    static async postWorkoutData(
        id: string,
        date: Date,
        workoutType: WorkoutType,
        selectedWorkouts: SelectedWorkout[]
    ): Promise<void> {
        const postWorkoutForm = new FormData();
        postWorkoutForm.append('id', encodeURIComponent(id));
        postWorkoutForm.append('date', encodeURIComponent(format(date, 'yyyy-MM-dd')));
        postWorkoutForm.append('type', workoutType);
        postWorkoutForm.append('exercises', JSON.stringify(selectedWorkouts.map(workout => ({
            id: workout.id,
            sets: workout.setCount,
            reps: workout.repititionCount,
            weight: workout.weight,
            exerciseName: workout.name,
            rating: workout.rating,
        }))));
        const response = await axios.post(BASE_URL + '/completedworkout', postWorkoutForm);
        return;
    }

    static async getWorkoutList(id: string, workoutType: WorkoutType): Promise<Workout[]> {
        const response = await axios.get< any, AxiosResponse<Workout[]> >(
            BASE_URL + `/workoutrec?id=${encodeURIComponent(id)}&type=${encodeURIComponent(workoutType)}`
        );

        return response.data;
    }
}
