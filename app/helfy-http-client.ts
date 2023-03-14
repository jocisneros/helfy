// helfy-http-client.ts

import axios, { AxiosResponse } from 'axios';
import { CompletedWorkout, UserData, Workout, WorkoutData, WorkoutType } from './types';

import Constants from "expo-constants";

const { manifest } = Constants;

function waitFor(timeMS: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, timeMS));
}

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

    static async getWorkoutHistory(id: string, date: Date): Promise<WorkoutData> {
        await waitFor(1000);
        return {} as WorkoutData;
    }

    static async postWorkoutData(id: string, date: Date, completedWorkouts: CompletedWorkout[]): Promise<void> {
        await waitFor(1000);
        return;
    }

    static async getWorkoutList(id: string, workoutType: WorkoutType): Promise<Workout[]> {
        console.log("CALLING WORKOUT LIST", BASE_URL + `/workoutrec?id=${encodeURIComponent(id)}&type=${encodeURIComponent(workoutType)}`)
        const response = await axios.get< any, AxiosResponse<Workout[]> >(
            BASE_URL + `/workoutrec?id=${encodeURIComponent(id)}&type=${encodeURIComponent(workoutType)}`
        );
        // console.log(response.data);
        return response.data;
    }
}
