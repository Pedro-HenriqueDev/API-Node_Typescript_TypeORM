import { AppDataSource } from "../data-source";
import { Room } from "../entities/room";

export const roomRepository = AppDataSource.getRepository(Room)