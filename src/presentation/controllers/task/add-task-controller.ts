import { AddTask } from "../../../domain/usecases/task/add-task";
import { HttpRequest } from "../../protocols";
import { Controller } from "../../protocols/controller";
export class AddTaskController implements Controller {
  constructor(private readonly addTask: AddTask) {}

  async handle(req: HttpRequest): Promise<any> {
    try {
      const requestData = {
        title: "Clean Code",
        description: "new test",
      };

      const task = await this.addTask.add(requestData);

      return {
        statusCode: 200,
        body: task,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
