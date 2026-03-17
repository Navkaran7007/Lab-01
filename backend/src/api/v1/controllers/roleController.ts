import { Request, Response } from "express";
import { roleService } from "../services/roleService";
import { organisationData } from "../data/organisationData";

export const getRoles = (req: Request, res: Response) => {
  try {
    const people = roleService.getPeople();
    const allRoles = [...organisationData, ...people];
    res.json(allRoles);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch roles" });
  }
};

//@ts-ignore
export const createPerson = (req: Request, res: Response) => {
  try {
    const { firstName, lastName, role } = req.body;

    if (!firstName || !lastName || !role) {
      return res.status(400).json({ error: "First name, last name, and role are required" });
    }

    const result = roleService.createPerson(firstName, lastName, role);

    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }

    res.status(201).json(result.person);
  } catch (error) {
    res.status(500).json({ error: "Failed to create person" });
  }
};
