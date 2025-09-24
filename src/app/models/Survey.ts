import { Section } from "./Section";

export interface Survey{
    idSurvey : number;
    survey : string;
    sections : Section[];
    nameParticipant : string;
    idParticipant : string;
}