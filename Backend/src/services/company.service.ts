import { prisma } from "../config/database";
import { convertBigIntToString } from "../utils/convertBigInt";

export async function getAll() {
    const companies = await prisma.company.findMany({
        include: { settings: true },
    });
    return convertBigIntToString(companies);
}

export async function getById(id: bigint) {
    const company = await prisma.company.findUnique({
        where: { id },
        include: { settings: true, users: true },
    });
    return convertBigIntToString(company);
}

export async function create(data: any) {
    const newCompany = await prisma.company.create({
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
        include: { settings: true },
    });
    return convertBigIntToString(newCompany);
}

export async function update(id: bigint, data: any) {
  const updatedCompany = await prisma.company.update({
    where: { id },
    data: {
      name: data.name,
      cuit: data.cuit,
      address: data.address,
      contact_info: data.contact_info,
      settings: data.settings
        ? {
            update: {
              enable_invoicing: data.settings.enable_invoicing,
              invoice_series: data.settings.invoice_series,
              default_currency: data.settings.default_currency,
            },
          }
        : undefined,
    },
    include: { settings: true },
  });

  return convertBigIntToString(updatedCompany);
}

export async function remove(id: bigint) {
    const deletedCompany = await prisma.company.update({
        where: { id },
        data: { deleted_at: new Date() },
    });
    return convertBigIntToString(deletedCompany);
}
