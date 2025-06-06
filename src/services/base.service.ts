import { prisma } from '../config/database';

class BaseService {
  static async findAll() {
    return await prisma.base.findMany();
  }

  static async findById(id: number) {
    return await prisma.base.findUnique({ where: { id } });
  }

  static async create(data: { name: string; email: string; isActive?: boolean }) {
    return await prisma.base.create({ data });
  }

  static async update(id: number, data: Partial<{ name: string; email: string; isActive: boolean }>) {
    return await prisma.base.update({
      where: { id },
      data,
    });
  }

  static async delete(id: number) {
    return await prisma.base.delete({ where: { id } });
  }
}

export default BaseService;