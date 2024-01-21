import { ITask } from "./types/tasks";

const baseUrl = 'http://localhost:8080/api/v1/tasks?user-id=2';

export const getAllTasks = async (): Promise<ITask[]> => {
    const res = await fetch(baseUrl);
    const tasks = await res.json();
    return tasks;
}
