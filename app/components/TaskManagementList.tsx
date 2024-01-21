import { ITask } from "@/types/tasks";
import React from "react";

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
        {tasks.map(task => (
            <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td></td>
            </tr> 
        ))}
        
      </tbody>
    </table>
  </div>;
};

export default TaskManagementList;