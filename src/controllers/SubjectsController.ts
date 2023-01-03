import { Request, Response } from "express";
import { SubjectRepository } from "../repositories/SubjectsRepositories";


export class SubjectController {

    async create(req: Request,res: Response) {
        const {name} = req.body
        if(!name) {
            return res.status(400).json({msg: "O nome e Obrigatorio"})
        }

        try{
            const newSubject = SubjectRepository.create({ name })

            await SubjectRepository.save(newSubject)

            return res.status(201).json(newSubject)

        } catch(err) {
            console.log(err)
            return res.status(500).json({msg: "Internal Server Error"})
        }
    }
}