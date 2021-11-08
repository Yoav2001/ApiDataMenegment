import type FinalAnswerModel = require("../models/FinalAnswer")
import FinalAnswerDb from '../db/finalAnswer'


export const getAllFinalAnswers :FinalAnswerModel.GetAllFinalAnswer = async () => {
    
    try{
        return await FinalAnswerDb.getAllFinalAnswersFromDb();
 
     }
     catch(error)
     {
        throw 'Database ' + error
    }

}
export const getFinalAnswerById:FinalAnswerModel.GetFinalAnswer = async (id:FinalAnswerModel.FinalAnswer["id"]) => {
    
    try{
        return await FinalAnswerDb.getFinalAnswerById(id);
 
     }
     catch(error)
     {
        throw 'Database ' + error
    }

}

export const addNewFinalAnswer : FinalAnswerModel.AddFinalAnswer = async (finalAnswer:FinalAnswerModel.FinalAnswer) => {
    try{
        FinalAnswerDb.insertNewFinalAnswer(finalAnswer); 
     }
     catch(error)
     {
         throw error
        
        
    }
    const res :FinalAnswerModel.addResult=" succeed to Added "
    return res;

}

export const UpdateNewFinalAnswer :FinalAnswerModel.EditFinalAnswer = async (finalAnswer:FinalAnswerModel.FinalAnswer) => {
    
    try{
        return await FinalAnswerDb.updateFinalAnswer(finalAnswer);
 
     }
     catch(error)
     {
        throw 'Database ' + error
    }

}



export default {getAllFinalAnswers,getFinalAnswerById,addNewFinalAnswer}