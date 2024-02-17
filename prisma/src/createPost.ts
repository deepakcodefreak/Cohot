import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({ log: ['info', 'query', 'error'] })

async function main() {
    // ... you will write your Prisma Client queries here
    await prisma.post.create({
        data: {
            title: 'Sample post 2',
            authorId: 1
        }
    })
}

main()