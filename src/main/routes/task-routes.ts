import { Router } from "express";
import { DbAddTask } from "../../data/usecases/task/add-task/db-add-task";
import { SaveTaskMongoRepository } from "../../infra/db/task/task-mongo-repository";
import { AddTaskController } from "../../presentation/controllers/task/add-task-controller";
import { HttpRequest } from "../../presentation/protocols";

const saveTaskMongoRepository = new SaveTaskMongoRepository();
const addTask = new DbAddTask(saveTaskMongoRepository);

const addTaskController = new AddTaskController(addTask);

const userRouter = Router();

const fakeAdapter = (controller: any) => {

  return async (req: any, res: any) => {
      const httpRequest: HttpRequest = {
        body: req.body,
        params: req.params
      }
         const httpResponse = await controller.handle(httpRequest, res);

         if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
          res.status(httpResponse.statusCode).json(httpResponse.body)
        } else {
          res.status(httpResponse.statusCode).json({
            error: httpResponse.body.message
          })
        }         
    }
}

userRouter.get('/tasks', fakeAdapter(addTaskController));

export default userRouter;
