import { AddTaskController } from "../../../../presentation/controllers/task/add-task-controller"
import { Controller } from "../../../../presentation/protocols"
import { LogControllerDecorator } from "../../../decorators/log-controller-decorator"
import { makeLogControllerDecorator } from "../../decorators/log-controller-decorator-factory"
import { makeDbAddTask } from "../../usecases/task/db-add-task-factory"

export const makeAddTaskController = (): Controller => {
  console.log('makeAddTaskController')
  const controller = new AddTaskController(makeDbAddTask())
  // return controller
  return makeLogControllerDecorator(controller);
}
