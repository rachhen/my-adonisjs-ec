import vine from '@vinejs/vine'
import { Infer } from '@vinejs/vine/types'

const registerSchema = vine.object({
  fullName: vine.string().maxLength(50),
  email: vine
    .string()
    .email()
    .normalizeEmail()
    .unique(async (db, value) => {
      const user = await db.from('users').where('email', value).first()

      return !user
    }),
  password: vine.string().minLength(6),
})

export const registerValidator = vine.compile(registerSchema)
export type RegisterInput = Infer<typeof registerSchema>

const loginSchema = vine.object({
  email: vine.string().email().normalizeEmail(),
  password: vine.string(),
})

export const loginValidator = vine.compile(loginSchema)
export type LoginInput = Infer<typeof loginSchema>
