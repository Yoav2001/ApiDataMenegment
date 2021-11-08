
import type answerModel = require("../models/answer")
import answerDb from '../db/answerDb'


export const getAllAnswers :answerModel.GetAllAnswers = async () => {
    
    try{
        return await answerDb.getAllAnswersFromDb();
 
     }
     catch(error)
     {
        throw 'Database ' + error
    }

}
export const getAnswerById :answerModel.GetAnswerWithAnswerId = async (idAnswer:answerModel.Answer["id"]) => {
    
    try{
        return await answerDb.getAnswerById(idAnswer);
 
     }
     catch(error)
     {
        throw 'Database ' + error
    }

}

export const addNewAnswer: answerModel.AddAnswer = async (answer:answerModel.Answer) => {
    try{
        answerDb.insertNewPost(answer); 
     }
     catch(error)
     {
         throw error
        
        
    }
    const res :answerModel.AddAnswertResult="Added Answer"
    return res;

}

export const updateAnswer :answerModel.EditAnswer = async (answer:answerModel.Answer) => {
    
    try{
        return await answerDb.updateAnswer(answer);
 
     }
     catch(error)
     {
        throw 'Database ' + error
    }

}



export default {getAnswerById,getAllAnswers,addNewAnswer,updateAnswer}