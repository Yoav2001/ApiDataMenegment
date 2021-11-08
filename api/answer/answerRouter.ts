import express from 'express';
import { Router } from 'express'
import answerService from '../../service/answerService';
import { Answer } from '../../models/answer';
import { authed } from '../logic/auth';

const router = Router()

//401 dont auth (token)- אתה מנסה לעשות םעולה שאין לך הרשאות אליה
//403 -when jwt.verfiy forbidden -problem with verfay

//500-problem with server-השרת לא רץ בעיה עם השרת 
//400 -problem with given proprites(types INVALID,AND MISSING )-
//404-not found what you want to do -ניסיתי לשלוף מהמסד נתונים משהו שלא קיים,url לא נכון 
//409-conflict-מנסה להוסיך משהו שקיים במסד נתונים ,מנסה לעשות משהו שהוא כבר קיים


router.route("/")
    .get(async (req:express.Request, res:express.Response, next:express.NextFunction) => {
        try {
            const data =  answerService.getAllAnswers();
            res.json(data);

        } catch (error) {
            res.status(500).send({error})
        }
        
    }) .post( authed,async (req:express.Request, res:express.Response, next:express.NextFunction) => {
        try {
            const textAnswer:string = <string>req.body.answerText;
            const ifnextIsFinal:boolean = <boolean>req.body.isFinal;
            const nextId:number =<number>req.body.nextId;
            const answer:Answer={text:textAnswer,ifNextIsFinalAnswer:ifnextIsFinal,nextId:nextId}
            const data=   await answerService.addNewAnswer(answer)  
            res.json(data)
        } catch (error) {
            res.status(400).send({error})

        }   
 

     

    })
    
    .patch(async (req, res, next) => {
        const textAnswer:string = <string>req.body.answerText;
        const ifnextIsFinal:boolean = <boolean>req.body.isFinal;
        const nextId:number =<number>req.body.nextId;
        const answer:Answer={text:textAnswer,ifNextIsFinalAnswer:ifnextIsFinal,nextId:nextId}
        
        const data = await answerService.updateAnswer(answer)
      
    });

    
    

    router.route("/")
    
    


export default router