import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    await prisma.user.create({
        data: {
            name: 'Deepak',
            email: 'deepak2@chawla.com',
            posts: {
                create: [
                    {
                        title: 'post 1'
                    },
                    {
                        title: "post 2"
                    }
                ]
            }
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })