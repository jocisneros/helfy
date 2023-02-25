// helfy-http-client.ts

import axios from 'axios';
import { CompletedWorkout, Workout, WorkoutData, WorkoutType } from './types';

function waitFor(timeMS: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, timeMS));
}

const BASE_URL = '';
export class HelfyHttpClient {
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
