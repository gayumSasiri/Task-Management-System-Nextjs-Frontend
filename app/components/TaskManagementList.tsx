import { ITask } from "@/types/tasks";
import React from "react";
import Task from "./Task";

interface TaskManagementListProps {
    tasks: ITask[]
}

const TaskManagementList: React.FC<TaskManagementListProps> = ({ tasks }) => {
    return <div className="overflow-x-auto">
    <table className="table">
      <thead>
        <tr>
          <th>Task Title</th>
          <th>Task Description</th>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
            <Task key={task.id} task={task}/>
        ))}
      </tbody>
    </table>
  </div>;
};

export default TaskManagementList;