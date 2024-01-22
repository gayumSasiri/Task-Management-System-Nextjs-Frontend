'use client';

import { BsClipboard2Plus } from "react-icons/bs";
import Model from "./Model";
import { FormEventHandler, useState } from "react";
import { addNewTask } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
    const router = useRouter();
    const [modelOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskTitle, setNewTaskTitle] = useState<string>('');
    const [newTaskDescription, setNewTaskDescription] = useState<string>('');

    const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await addNewTask({
            
            id: uuidv4(),
            title: newTaskTitle,
            description: newTaskDescription,
            userId: "1" //todo: this should added current logged userId 
        })
        // console.log(newTaskTitle);
        // console.log(newTaskDescription);
        setNewTaskTitle("");
        setNewTaskDescription("");
        setModalOpen(false);
        router.refresh();
    }

    return <div>
        <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">Add new task
            <BsClipboard2Plus className="ml-2" size={18} />
        </button>

        <Model modelOpen={modelOpen} setModalOpen={setModalOpen}>
            <form onSubmit={handleSubmitNewTask}>
                <h3 className="font-bold text-lg">Add new task</h3>
                <div className="modal-action flex flex-col">
                    <label className="mt-3 w-full" htmlFor="title">Title</label>
                    <input 
                    id="title"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    type="text" 
                    placeholder="Enter task title here" 
                    className="input input-bordered w-full m-3" />
                    <label className="mt-3 w-full" htmlFor="description">Description</label>
                    <input 
                    id="description"
                    value={newTaskDescription}
                    onChange={(e) => setNewTaskDescription(e.target.value)}
                    type="text" 
                    placeholder="Enter task description here" 
                    className="input input-bordered w-full m-3" />
                    <button type="submit" className="btn">Submit</button>
                </div>
            </form>
        </Model>
    </div>;
};

export default AddTask;