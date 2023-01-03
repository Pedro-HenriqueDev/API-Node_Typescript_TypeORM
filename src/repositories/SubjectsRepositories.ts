import { Subject } from "../entities/Subject";
import { AppDataSource } from "../data-source";

export const SubjectRepository = AppDataSource.getRepository(Subject)
