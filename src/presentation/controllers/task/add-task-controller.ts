import { DbAddTask } from "../../../data/usecases/task/add-task/db-add-task";
import { AddTask } from "../../../domain/usecases/task/add-task";
import { Controller } from '../../protocols/controller'
export class AddTaskController implements Controller {

  constructor(private readonly a: AddTask) {}

  async handle({ req, res }: any): Promise<any> {
    try {
      const requestData = {
        title: "Clean Code",
        description: "new test",
      };

      const task = await this.a.add(requestData);

      return res.status(200).json(task);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
}
