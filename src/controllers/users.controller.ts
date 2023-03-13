import { Request, Response } from 'npm:express';
import User from '../models/user.model.ts';

export const getUsers = async (_req: Request, res: Response) => {
    const users = await User.find();
    return res.send(users);
}

export const getUser = async (req: Request, res: Response) => {
    const {
        id: _id,
    } = req.params;
    const users = await User.findById(_id);
    return res.send(users);
}

export const createUser = async (req: Request, res: Response) => {
    const newUser = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    }
    const user = await User.create(newUser);
    return res.send(user);
}

export const updateUser = async (req: Request, res: Response) => {
    const {
        id: _id,
    } = req.params;
    const user = await User.findByIdAndUpdate(_id, req.body, {
        new: true,
    });
    return res.send(user);
}

export const deleteUser = async (req: Request, res: Response) => {
    const {
        id: _id,
    } = req.params;
    const user = await User.findByIdAndRemove(_id);
    return res.send(user);
}