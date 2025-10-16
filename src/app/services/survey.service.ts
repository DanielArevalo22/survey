import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from '../models/Survey';
import { Response } from '../models/Response';
import { Scores } from '../models/Scores';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private urlGetSurvey = 'survey-logic-aus-develop.us-east-1.elasticbeanstalk.com/api/v1/survey/getSurvey?service=';
  private urlSaveSurvey = 'http://localhost:6969/api/v1/survey/saveSurvey';

  constructor(private http: HttpClient) { }

  public getSurvey(service : string){
    return this.http.get<Response<Survey>>(
      this.urlGetSurvey + 'shop'
    );
  }

  public postSurvey(bodySurvey : Scores){
    return this.http.post<any>(this.urlSaveSurvey, bodySurvey);
  }

}
