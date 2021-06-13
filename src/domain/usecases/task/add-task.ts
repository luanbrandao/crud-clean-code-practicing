import { TaskModel } from '../../models/task/task';

export interface AddTask {
  add(task: TaskModel): Promise<TaskModel|null>
}