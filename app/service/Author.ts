import { Author, PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export type AuthorInput = {
    name: string
    biography: string

}




// async
export async function createAuthor(input: AuthorInput) {

    const newUser = await prisma.author.create({
        data: input
    })

    console.log("new user created:" + newUser)


}