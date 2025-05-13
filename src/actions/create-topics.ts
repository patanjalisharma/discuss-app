'use server'

import { auth } from "@/auth"
import { prisma } from "@/lib"
import { Topic } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import {z} from "zod"

const createTopicsSchema = z.object({
    name: z.string().min(3).regex(/^[a-z-]+$/,{message: 'Name must be lowercase and contain only letters and dashes'}),
    description: z.string().min(10)
})

type CreateTopicFormState = {
    errors: {
        name?: string[],
        description?: string[],
        formError?: string[]
    }
}

export const createTopics = async (prevState: CreateTopicFormState, formData: FormData) : Promise<CreateTopicFormState> => {
   

    const result = createTopicsSchema.safeParse({
        name: formData.get('name'),
        description: formData.get('description')
    })


    if(!result?.success) {
return {
    errors: result.error.flatten().fieldErrors
    }
}
const session = await auth()
if(!session || !session.user) {
    return {
        errors:  {
            formError:["You have to login first"]
        }
    }
}


let topic : Topic
try {
    topic = await prisma.topic.create({
        data: {

            slug: result?.data?.name,
            description: result?.data?.description,
        }
    })
} catch (error) {
    if(error instanceof Error)  {
        return {
            errors: {
                formError: [error.message]
            }
        }
    } else {
        return {
            errors: {
                formError: ["Something went wrong"]
            }
        }
    }
}

revalidatePath('/')
redirect(`/topic/${topic.slug}`)
    


}