import z from 'zod'

const StringZodSchema = z.string();

type StringZodType = z.infer<typeof StringZodSchema>;

const PersonSchema = z.object({
    name: z.string(),
    age: z.number()
})

const myPerson = {
    name: 'deepak',
    age: 24
}

const { success } = PersonSchema.safeParse(myPerson)

const updatePersonData: z.infer<typeof PersonSchema> = myPerson;

// z.infer helps infering ts schema from zod schema