import { ITask } from "./types/tasks";

const baseUrlGet = 'http://localhost:8080/api/v1/tasks?user-id=2'; // todo: this has to be edit(this should not be hardcode)
const baseUrlPost = 'http://localhost:8080/api/v1/tasks';

export const getAllTasks = async (): Promise<ITask[]> => {
    const res = await fetch(baseUrlGet, { cache: 'no-store' });
    const tasks = await res.json();
    return tasks;
}

export const addNewTask = async (task: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrlPost}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    const newTask = await res.json();
    return newTask;
}
