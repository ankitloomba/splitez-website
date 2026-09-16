'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function createFaq(formData: FormData) {
  const question = formData.get('question') as string
  const answer = formData.get('answer') as string
  
  if (!question || !answer) return
  
  await prisma.faq.create({
    data: { question, answer }
  })
  
  revalidatePath('/admin')
  revalidatePath('/')
}

export async function deleteFaq(formData: FormData) {
  const id = formData.get('id') as string
  
  if (!id) return
  
  await prisma.faq.delete({
    where: { id }
  })
  
  revalidatePath('/admin')
  revalidatePath('/')
}
