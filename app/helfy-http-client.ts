// helfy-http-client.ts

import axios from 'axios';
import { CompletedWorkout, UserData, Workout, WorkoutData, WorkoutType } from './types';

import Constants from "expo-constants";

const { manifest } = Constants;

function waitFor(timeMS: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, timeMS));
}

const BASE_URL = `https://${manifest!.debuggerHost!.split(':').shift()}:8888`;

// const BASE_URL = `http://11.20.17.135:8888`;

export class HelfyHttpClient {
    // Convert User Height to inches
    static async postUser(user: UserData): Promise<void> {
        console.log("CALLING POST USER REQUEST", BASE_URL);
        const response = await axios.post(BASE_URL + '/adduser');
        console.log(response);
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
        await waitFor(1000);
        return {} as Workout[];
    }
}
