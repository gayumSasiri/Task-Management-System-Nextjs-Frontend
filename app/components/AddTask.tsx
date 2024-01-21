'use client';

import { BsClipboard2Plus } from "react-icons/bs";
import Model from "./Model";
import { useState } from "react";

const AddTask = () => {
    const [modelOpen, setModalOpen] = useState<boolean>(false);

    return <div>
        <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">Add new task
            <BsClipboard2Plus className="ml-2" size={18} />
        </button>

        <Model modelOpen={modelOpen} setModalOpen={setModalOpen} />
    </div>;
};

export default AddTask;