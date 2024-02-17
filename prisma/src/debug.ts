import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query'
        }
    ]
})

async function main() {
    const posts = await prisma.post.findMany({
        take: 2,
        skip: 2,
    })
    console.log(posts);

}

main()

prisma.$on('query', async (e) => {
    console.log(`${e.query} ${e.params}`);

})