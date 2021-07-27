import { HttpResponse } from "../../protocols";

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: 'Internal server error'
})