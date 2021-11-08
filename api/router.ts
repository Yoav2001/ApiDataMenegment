import express, {Router} from 'express'
import answerRouter from './answer/answerRouter'
import questionRouter from './question/questionAnswer'
import finalAnswerRouter from './finalAnswer/finalAnswerRouter'

const app = express()
const router = Router()
router.route("")
    .post((req:express.Request, res:express.Response, next) => {

       
    })

router.use("/question",questionRouter)
router.use("/answer",answerRouter)
router.use("/finalAnswer",finalAnswerRouter)


export default router