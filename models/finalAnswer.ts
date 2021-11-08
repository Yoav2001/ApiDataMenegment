
export type FinalAnswer = {
    id?:number,
    field:string,
    subField:string,
    question :string,
    subQuestion:string,
    solution:string
   }
   export type addResult = " succeed to Added " | "Failed to add "
   export type deleteResulat = "succeed to delete " | "Faield to delete "
   export type updateAnswer = "update" | "Faield to update "

   export type GetAllFinalAnswer = (finalAnswerId: FinalAnswer['id']) => Promise<FinalAnswer[]>;
   export type GetFinalAnswer = (finalAnswerId: FinalAnswer['id']) => Promise<FinalAnswer>;
   export type AddFinalAnswer = (FinalAnswerObj: FinalAnswer) => Promise<string>;
   export type EditFinalAnswer = (FinalAnswerObj: FinalAnswer) => Promise<string>;
   export type DeleteFinalAnswer = (idFinalAnswer: FinalAnswer['id']) => Promise<string>;