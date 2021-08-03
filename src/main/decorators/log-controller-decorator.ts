import {
  Controller,
  HttpRequest,
  HttpResponse,
} from "../../presentation/protocols";

export class LogControllerDecorator implements Controller {
  constructor(
    private readonly controller: Controller
  ){}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest);

    if(httpResponse.statusCode === 500 ) {
      console.log('error -> LogControllerDecorator');
      return  {
        statusCode: 500,
        body: "deu merda"
      }
    }

    console.log('log ok');

    return httpResponse;
  }


}
