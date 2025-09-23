import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../utils/auth';

const prisma = new PrismaClient();

async function createSuperAdmin() {
  try {
    console.log('🔐 Creando usuario superadmin...');
    
    // Verificar si ya existe un superadmin
    const existingSuperAdmin = await prisma.user.findFirst({
      where: { role: 'superadmin' }
    });
    
    if (existingSuperAdmin) {
      console.log('✅ Ya existe un superadmin en el sistema');
      return;
    }
    
    // Crear superadmin
    const hashedPassword = await hashPassword('admin123');
    
    const superAdmin = await prisma.user.create({
      data: {
        username: 'admin',
        password: hashedPassword,
        role: 'superadmin'
      }
    });
    
    console.log('✅ Superadmin creado exitosamente:');
    console.log('   Username: admin');
    console.log('   Password: admin123');
    console.log('   ID:', superAdmin.id);
    
  } catch (error) {
    console.error('❌ Error creando superadmin:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Ejecutar solo si se llama directamente
if (require.main === module) {
  createSuperAdmin();
}

export { createSuperAdmin };
