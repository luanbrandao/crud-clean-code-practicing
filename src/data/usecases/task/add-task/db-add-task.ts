import { TaskModel } from "../../../../domain/models/task/task";
import { AddTask } from "../../../../domain/usecases/task/add-task";
import { AddTaskRepository } from "../../../protocols/db/task/add-task-repository";

export class DbAddTask implements AddTask {
  constructor(
    private readonly addAccountRepository:AddTaskRepository,
  ) {
    console.log("Data: DbAddTask");
  }

  async add(taskData: TaskModel): Promise<TaskModel | null> {
    console.log('DbAddTask');
    const newTask = await this.addAccountRepository.add(taskData);

    if(newTask) {
      return Promise.resolve(newTask);
    }
    return Promise.resolve(null);
  }
}
