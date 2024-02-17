import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['info', 'error', 'query']
});

async function main() {
    const users = await prisma.user.findMany({
        where: {
            email: {
                endsWith: '2@chawla.com'
            },
            posts: {
                some: {
                    published: true
                }
            }
        },
        include: {
            posts: true
        }
    })
    console.log(users[0].posts);


}

main()