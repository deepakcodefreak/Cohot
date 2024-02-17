import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['info', 'error', 'query']
});

async function main() {
    const users = await prisma.user.findFirst({
        where: {
            name: 'Deepak'
        },
        include: {
            posts: true
        }
    })
    console.log(users);


}

main()