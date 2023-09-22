import { Router, Request, Response } from "express";
import { Users } from "../Entities/User";
// import { AppDataSource } from "../data-source";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const users = await Users.find();
        res.status(200).json({
            status: "OK",
            data: users,
        });
    } catch (error) {
        console.error(error);
    }
});

router.post("/", (req: Request, res: Response) => {
    try {
        Users.insert({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: req.body.password,
        });

        res.status(201).json({
            status: "CREATED",
            data: "Created User",
        });
    } catch (error) {
        console.error(error);
    }
});

router.get("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await Users.findOne({
            where: {
                id: +id,
            },
        });
        if (user !== null || undefined) {
            return res.status(200).json({
                status: "OK",
                data: user,
            });
        }
        return res.status(404).json({
            status: "NOT FOUND",
            data: "User not found",
        });
    } catch (error) {
        console.error(error);
    }
});

router.delete("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await Users.delete({ id: +id });
        res.status(204).json({
            status: "DELETED",
            data: `User deleted: ${id}`,
        });
    } catch (error) {
        console.error(error);
    }
});

router.patch("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await Users.findOneBy({ id: +id });
        if (!user)
            return res.status(404).json({
                status: "NOT FOUND",
                data: "User Not Found",
            });
        await Users.update({ id: +id }, req.body);

        return res.status(204).json({
            status: "EDITED",
            data: `Edited user id: ${id}`,
        });
    } catch (error) {
        console.error(error);
    }
});

export default router;
