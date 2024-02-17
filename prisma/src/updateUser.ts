import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const data = await prisma.user.update({
        where: {
            email: 'deepak@chawla.com'
        },
        data: {
            name: 'upatedName new  Deepak'
        }
    })
    console.log(data);

}

main();