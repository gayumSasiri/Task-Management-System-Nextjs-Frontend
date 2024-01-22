import { ITask } from "./types/tasks";

const baseUrlGet = 'http://localhost:8080/api/v1/tasks?user-id=2'; // todo: this has to be edit(this should not be hardcode)

export const getAllTasks = async (): Promise<ITask[]> => {
    const res = await fetch(baseUrlGet, { cache: 'no-store' });
    const tasks = await res.json();
    return tasks;
}


const baseUrlPost = 'http://localhost:8080/api/v1/tasks'; // todo: check if this ok?

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

const baseUrlPatch = 'http://localhost:8080/api/v1/tasks/9'; // todo: task id should not be hardcoded

export const updateTask = async (task: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrlPatch}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    const updatedTask = await res.json();
    return updatedTask;
}

const baseUrlDelete = 'http://localhost:8080/api/v1/tasks/9'; // todo: task id should not be hardcoded

export const deleteTask = async (id: string): Promise<void> => {
    await fetch(`${baseUrlPatch}`, {
        method: 'DELETE'
    })
}
