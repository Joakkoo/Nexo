import { Request, Response, NextFunction } from "express";
import * as companyService from "../services/company.service";

// Obtener todas las empresas
export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const companies = await companyService.getAll();
    res.json({ success: true, data: companies });
  } catch (error) {
    next(error);
  }
}

// Obtener empresa por ID
export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const company = await companyService.getById(BigInt(req.params.id));
    if (!company) return res.status(404).json({ success: false, message: "Empresa no encontrada" });
    res.json({ success: true, data: company });
  } catch (error) {
    next(error);
  }
}

// Crear nueva empresa
export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const company = await companyService.create(req.body);
      const serialized = JSON.parse(JSON.stringify(company, (_, value) =>
      typeof value === 'bigint' ? value.toString() : value
    ));
    res.status(201).json({ success: true, data: serialized });
  } catch (error) {
    next(error);
  }
}

// Actualizar empresa
export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const company = await companyService.update(BigInt(req.params.id), req.body);
    if (!company) return res.status(404).json({ success: false, message: "Empresa no encontrada" });
    res.json({ success: true, data: company });
  } catch (error) {
    next(error);
  }
}

// Eliminar empresa
export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const success = await companyService.remove(BigInt(req.params.id));
    if (!success) return res.status(404).json({ success: false, message: "Empresa no encontrada" });
    res.json({ success: true, message: "Empresa eliminada correctamente" });
  } catch (error) {
    next(error);
  }
}