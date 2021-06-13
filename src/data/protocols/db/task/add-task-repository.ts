import { TaskModel } from "../../../../domain/models/task/task";

export interface AddTaskRepository {
  add(task:TaskModel): Promise<TaskModel|null>
}