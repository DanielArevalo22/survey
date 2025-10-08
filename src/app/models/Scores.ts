import { Section } from '../models/Section'

export interface Scores{
    idSurvey : number;
    section : Section[];
    idParticipant : string;
    nameParticipant : string;
}