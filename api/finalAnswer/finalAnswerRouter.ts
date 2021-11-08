import express from 'express';
import { Router } from 'express'
import finalAnswerService from '../../service/finalAnswer';
import { FinalAnswer } from '../../models/finalAnswer';
import { authed } from '../logic/auth';

const router = Router()


router.route("/")
    .get(async (req:express.Request, res:express.Response, next:express.NextFunction) => {
        
        const data = await finalAnswerService.getAllAnswers();
        
        res.json(data);
    }) .post( authed,async (req:express.Request, res:express.Response, next:express.NextFunction) => {
        console.log("aa");
        
        const field:string = <string>req.body.field;
        const subField:string = <string>req.body.subField;
        const question:string = <string>req.body.question;
        const subQuestion:string = <string>req.body.subQuestion;
        const solution:string = <string>req.body.solution;

     
        const fa:FinalAnswer={field:field,subField:subField,question:question,subQuestion:subQuestion,solution:solution}
       res.json( await finalAnswerService.addNewFinalAnswer(fa))          

    })
    .patch( authed,async (req:express.Request, res:express.Response, next:express.NextFunction) => {
        console.log("aa");
        
        const field:string = <string>req.body.field;
        const subField:string = <string>req.body.subField;
        const question:string = <string>req.body.question;
        const subQuestion:string = <string>req.body.subQuestion;
        const solution:string = <string>req.body.solution;

     
        const fa:FinalAnswer={field:field,subField:subField,question:question,subQuestion:subQuestion,solution:solution}
        res.json( await finalAnswerService.updateFinalAnswer(fa))          

    });
    

 


export default router