import prismaClient from '../prisma'
class CreateMessageService {
  async execute(text: string, user_id: string) {
    const message = await prismaClient
  }
}
export { CreateMessageService }
