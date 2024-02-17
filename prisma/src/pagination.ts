import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const posts = await prisma.post.findMany({
        take: 2,
        skip: 2,
    })
    console.log(posts);

}

main()