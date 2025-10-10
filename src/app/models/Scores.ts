import { Section } from '../models/Section'

export interface Scores{
    idSurvey : number;
    sections : Section[];
    idParticipant : string;
    nameParticipant : string;
}