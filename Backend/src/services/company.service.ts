import { prisma } from "../config/database";

export async function getAll() {
    return prisma.company.findMany({
        include: { settings: true }
    });
}

export async function getById(id: bigint) {
    return prisma.company.findUnique({
        where: { id },
        include: { settings: true, users: true }
    });
}

export async function create(data: any) {
    return prisma.company.create({
        data: {
            name: data.name,
            address: data.address,
            cuit: data.cuit,
            contact_info: data.contact_info,
            settings: {
                create: {
                    enable_invoicing: data.enable_invoicing ?? true,
                    invoice_series: data.invoice_series ?? "V",
                    default_currency: data.default_currency ?? "ARS",
                },
            },
        },
        include: { settings: true }
    });
}

export async function update(id: bigint, data: any) {
    return prisma.company.update({
        where: { id },
        data: {
            name: data.name,
            cuit: data.cuit,
            address: data.address,
            contact_info: data.contact_info,
            settings: data.settings
                ? { update: data.settings }
                : undefined,
        },
        include: { settings: true }
    });
}
export async function remove(id: bigint) {
    return prisma.company.update({
        where: { id },
        data: { deleted_at: new Date() },
    });
}