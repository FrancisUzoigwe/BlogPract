import express, {Request, Response} from "express";

export const signUpAuthor = async (req: Request, res: Response): Promise<Response> => {
try {
    const {name, password, email} = req.body
    return res.status(201).json({
        message : "Author created successfully"
    })
} catch (error) {
    return res.status(400).json({
        message : "Unable to sign up"
    })
}
}