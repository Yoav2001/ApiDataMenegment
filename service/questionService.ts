import type questionModel = require("../models/question")
import questionsDb from '../db/questions'


export const getAllQuestion :questionModel.GetAllQuestion = async () => {
    
    try{
        return await questionsDb.getAllQuestionsFromDb();
 
     }
     catch(error)
     {
        throw 'Database ' + error
    }

}
export const getQuestionByid:questionModel.GetQuestionById = async (id:questionModel.Question["id"]) => {
    
    try{
        return await questionsDb.getQuestionById(id);
 
     }
     catch(error)
     {
        throw 'Database ' + error
    }

}

export const addNewQuestion : questionModel.AddQuestion = async (q:questionModel.Question) => {
    try{
        questionsDb.insertNewQuestion(q); 
     }
     catch(error)
     {
         throw error
        
        
    }
    const res :questionModel.addResult=" succeed to Added "
    return res;

}

export const UpdateQuestion :questionModel.EditQuestion= async (q:questionModel.Question) => {
    
    try{
        return await questionsDb.updateQuestion(q);
 
     }
     catch(error)
     {
        throw 'Database ' + error
    }

}



export default {getAllQuestion,getQuestionByid,addNewQuestion,UpdateQuestion}