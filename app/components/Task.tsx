"use client";

import { ITask } from "@/types/tasks";
import React, { FormEventHandler, useState } from "react";
import { MdEditNote } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";
import Model from "./Model";
import { useRouter } from "next/navigation";
import { deleteTask, updateTask } from "@/api";

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
    const router = useRouter();
    const [openModalEdit, setOpenModelEdit] = useState<boolean>(false);
    const [openModalDelete, setOpenModelDelete] = useState<boolean>(false);
    const [taskTitleToEdit, setTaskTitleToEdit] = useState<string>(task.title);
    const [taskDescriptionToEdit, setTaskDescriptionToEdit] = useState<string>(task.description);

    const handleSubmitEditTask : FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await updateTask({
            
            id: task.id,
            title: taskTitleToEdit,
            description: taskDescriptionToEdit,
            userId: "1" //todo: this should added current logged userId 
        })
        setTaskTitleToEdit("");
        setTaskDescriptionToEdit("");
        setOpenModelEdit(false);
        router.refresh();
    }

    const handleDeleteTask = async (id: string) => {
        await deleteTask(id);
        setOpenModelDelete(false);
        router.refresh;
    }

    return <tr key={task.id}>
    <td>{task.title}</td>
    <td>{task.description}</td>
    <td className="flex gap-5">
        <MdEditNote 
        onClick={() => setOpenModelEdit(true)}
        cursor="pointer" 
        className="text-blue-300" 
        size={25} />
        <Model modelOpen={openModalEdit} setModalOpen={setOpenModelEdit}>
            <form onSubmit={handleSubmitEditTask}>
                <h3 className="font-bold text-lg">Edit task</h3>
                <div className="modal-action flex flex-col">
                    <label className="mt-3 w-full" htmlFor="title">Title</label>
                    <input 
                    id="title"
                    value={taskTitleToEdit}
                    onChange={(e) => setTaskTitleToEdit(e.target.value)}
                    type="text" 
                    placeholder="Enter task title here" 
                    className="input input-bordered w-full m-3" />
                    <label className="mt-3 w-full" htmlFor="description">Description</label>
                    <input 
                    id="description"
                    value={taskDescriptionToEdit}
                    onChange={(e) => setTaskDescriptionToEdit(e.target.value)}
                    type="text" 
                    placeholder="Enter task description here" 
                    className="input input-bordered w-full m-3" />
                    <button type="submit" className="btn">Submit</button>
                </div>
            </form>
        </Model>
        <FaTrashCan onClick={() => setOpenModelDelete(true)} cursor="pointer" className="text-red-400" size={16} />
        <Model modelOpen={openModalDelete} setModalOpen={setOpenModelDelete}>
            <h3 className="text-lg">Are you sure, you want to delete this task ?</h3>
            <div className="model-action">
                <button
                onClick={() => handleDeleteTask(task.id)}
                className="btn btn-outline btn-warning w-full mt-5"
                >
                    YES
                </button>
            </div>
        </Model>
    </td>
</tr> 
};

export default Task;