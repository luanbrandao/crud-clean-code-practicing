import { AddTaskRepository } from "../../../data/protocols/db/task/add-task-repository";
import { TaskModel } from "../../../domain/models/task/task";

export class SaveTaskMongoRepository implements AddTaskRepository {
  async add(taskData: TaskModel): Promise<TaskModel | null> {
    const task: TaskModel = {
      title: 'Clean Architecture',
      description: 'CA'
    };
    
    if(task) {
      console.log('SaveTaskMongoRepository: saving task...')
      return Promise.resolve(task)
    }
    
    return Promise.resolve(null)
  }

}