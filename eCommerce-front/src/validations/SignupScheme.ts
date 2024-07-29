import { z } from "zod";

const signUpScheme = z.object({
  firstName: z.string().min(1, {message: "First name is required"}),
  lastName: z.string().min(1, {message: "Last name is required"}),
  email: z.string().email().min(1,{message:  "Email is required"}),
  password: z.string().min(8, {message: "Password must be at least 8 characters"}).regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/),
  confirmPassword: z.string().min(1, {message: "Confirm password is required"}),
})
.refine((input) => input.password === input.confirmPassword, {
    message: "password and confirmPassword are not matched", 
    path: ["confirmPassword"]
  })

type signupType= z.infer<typeof signUpScheme>

export {signUpScheme, type signupType}