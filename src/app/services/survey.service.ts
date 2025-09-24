import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from '../models/Survey';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private urlGetSurvey = 'http://localhost:6969/api/v1/survey/getSurvey?service=';

  constructor(private http: HttpClient) { }

  public getSurvey(service : string){
    return this.http.get<Response<Survey>>(
      this.urlGetSurvey + 'shop'
    );
  }

}
