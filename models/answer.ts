export type Answer = {
    id?: number
    text: string,
    ifNextIsFinalAnswer: boolean,
    nextId:number
}

export type AddAnswertResult = "Added Answer" | "Failed to add "
export type DeletePostResult = "delete Answer" | "Faield to delete "
export type updateAnswer = "update" | "Faield to update "

export type GetAllAnswers = () => Promise<Answer[]>|undefined;
export type GetAnswerWithAnswerId = (answerId: Answer['id']) => Promise<Answer>|undefined;
export type AddAnswer = (AnswerObj: Answer) => Promise<string>;
export type EditAnswer = (AnswerObj: Answer) => Promise<string>;
export type DeleteAnswer= (idAnswer: Answer['id']) => Promise<string>