import express from 'express';
import { Router } from 'express'
import questionService from '../../service/questionService';
import { Question } from '../../models/question';
import { authed } from '../logic/auth';

const router = Router()


router.route("/")
    .get(async (req:express.Request, res:express.Response, next:express.NextFunction) => {
        
        const data = await questionService.getAllQuestion();
        
        res.json(data);
    }) .post( authed,async (req:express.Request, res:express.Response, next:express.NextFunction) => {
        console.log("aa")
        const textQuestion:string = <string>req.body.questionText;
        const question:Question={text:textQuestion}
       res.json( await questionService.addNewQuestion(question))          

    })
    .patch( authed,async (req:express.Request, res:express.Response, next:express.NextFunction) => {
        const textQuestion:string = <string>req.body.questionText;
        const question:Question={text:textQuestion}
       res.json( await questionService.updateQuestion(question))          

    })
    
    
    ;

    // router.route("/:email")
    
    // .get(async (req, res, next) => {
    //     const email:string = <string>req.params.email;     
    //     console.log(email);
        
    //     const data = await answerService.getAllPostsOfUser(email);
    //     console.log(data)
    //     res.json({ key: data });
    // })


export default router