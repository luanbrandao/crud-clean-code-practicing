import { AddTask } from "../../../domain/usecases/task/add-task";
import { ok } from "../../helpers/http/http-helper";
import { HttpRequest, HttpResponse } from "../../protocols";
import { Controller } from "../../protocols/controller";
export class AddTaskController implements Controller {
  constructor(private readonly addTask: AddTask) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const requestData = {
        title: "Clean Code",
        description: "new test",
      };

      const task = await this.addTask.add(requestData);

      return ok(task)
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        body: { message : 'error'}
      }
    }
  }
}
