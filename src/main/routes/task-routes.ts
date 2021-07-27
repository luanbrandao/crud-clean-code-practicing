import { Router } from "express";
import { DbAddTask } from "../../data/usecases/task/add-task/db-add-task";
import { SaveTaskMongoRepository } from "../../infra/db/task/task-mongo-repository";
import { AddTaskController } from "../../presentation/controllers/task/add-task-controller";
import { HttpRequest } from "../../presentation/protocols";
import { adaptRoute } from "../adapters/express-route-adapter";

const saveTaskMongoRepository = new SaveTaskMongoRepository();
const addTask = new DbAddTask(saveTaskMongoRepository);

const addTaskController = new AddTaskController(addTask);

const userRouter = Router();

userRouter.get('/tasks', adaptRoute(addTaskController));

export default userRouter;
