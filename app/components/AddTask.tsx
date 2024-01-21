import { BsClipboard2Plus } from "react-icons/bs";

const AddTask = () => {
    return <div>
        <button className="btn btn-primary w-full">Add new task
        <BsClipboard2Plus className="ml-2" size={18} /></button>
    </div>;
};

export default AddTask;