
export type Question = {
 id?:number,
text:string
}


export type addResult = " succeed to Added " | "Failed to add "
export type deleteResult = "succeed to delete " | "Faield to delete "
export type updaterRsult = "update" | "Faield to update "

export type GetAllQuestion = (qustionId: Question['id']) => Promise<Question[]>;
export type GetQuestionById = (qustionId: Question['id']) => Promise<Question>;
export type AddQuestion = (questionObj: Question) => Promise<string>;
export type EditQuestion = (questionObj: Question) => Promise<string>;
export type DeleteQuestion = (idQuestion: Question['id']) => Promise<string>;