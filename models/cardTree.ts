 




 
 export type Card ={
    id: number;
    prevCard?: QuestionCard| FinalAnswerCard;
    cardTitle: string;
    clicked: number;
    ahmashSelected: boolean;
}

export type QuestionCard =  Card &{ 
   answers: Answer[];
   nextCards?: (QuestionCard | FinalAnswerCard)[];
   indexSelectedAnswer?: number;
 
}

export type FinalAnswerCard  =  Card & { 
    idFinalAnswerCard:number,
    crmField:string,
    crmSubField:string,
    crmQuestion :string,
    crmSubQuestion:string,
}



export type FinalAnswer = {
    id?:number,
    crmField:string,
    crmSubField:string,
    crmQuestion :string,
    crmSubQuestion:string,
    crmSolution:string
   }

   export type Answer = {
    id?: number
    text: string,
    nextId:number
}

   export type addResult = " succeed to Added " | "Failed to add "
   export type deleteResulat = "succeed to delete " | "Faield to delete "
   export type updateAnswer = "update" | "Faield to update "

   export type GetAllFinalAnswer = (finalAnswerId: FinalAnswer['id']) => Promise<FinalAnswer[]>;
   export type GetFinalAnswer = (finalAnswerId: FinalAnswer['id']) => Promise<FinalAnswer>;
   export type AddFinalAnswer = (FinalAnswerObj: FinalAnswer) => Promise<string>;
   export type EditFinalAnswer = (FinalAnswerObj: FinalAnswer) => Promise<string>;
   export type DeleteFinalAnswer = (idFinalAnswer: FinalAnswer['id']) => Promise<string>;