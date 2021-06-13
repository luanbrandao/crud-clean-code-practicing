import { Router } from "express";
import { DbAddTask } from "../../data/usecases/task/add-task/db-add-task";
import { SaveTaskMongoRepository } from "../../infra/db/task/task-mongo-repository";
import { AddTaskController } from "../../presentation/controllers/task/add-task-controller";

const saveTaskMongoRepository = new SaveTaskMongoRepository();
const addTask = new DbAddTask(saveTaskMongoRepository);

const addTaskController = new AddTaskController(addTask);

const userRouter = Router();

const fakeAdapter = (controller: any) => {
    return (req: any, res: any) => {
         return controller.handle(req, res)
    }
}

userRouter.get('/tasks', fakeAdapter(addTaskController));

export default userRouter;
