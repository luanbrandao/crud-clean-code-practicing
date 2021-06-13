import { SaveTaskMongoRepository } from "../../../../infra/db/task/task-mongo-repository"
import { DbAddTask } from "../../../../data/usecases/task/add-task/db-add-task"
import { AddTask } from "../../../../domain/usecases/task/add-task"

export const makeDbAddTask = (): AddTask => {
  console.log('makeDbAddTask')
  const taskMongoRepository = new SaveTaskMongoRepository()
  return new DbAddTask(taskMongoRepository)
}
