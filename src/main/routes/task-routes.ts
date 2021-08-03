import { Router } from "express";
import { DbAddTask } from "../../data/usecases/task/add-task/db-add-task";
import { SaveTaskMongoRepository } from "../../infra/db/task/task-mongo-repository";
import { AddTaskController } from "../../presentation/controllers/task/add-task-controller";
import { HttpRequest } from "../../presentation/protocols";
import { adapterRoute } from "../adapters/express-route-adapter";
import { makeAddTaskController } from "../factories/controller/task/add-task-controller-factory";

// const saveTaskMongoRepository = new SaveTaskMongoRepository();
// const addTask = new DbAddTask(saveTaskMongoRepository);

// const addTaskController = new AddTaskController(addTask);

const userRouter = Router();

userRouter.get('/tasks', adapterRoute(makeAddTaskController()));

export default userRouter;
