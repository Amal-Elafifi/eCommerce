import { z } from "zod";

const signinScheme = z.object({
  email: z.string().email().min(1,{message: "Email is required"}),
  password: z.string().min(8, {message: "Password must be at least 8 characters"})
})


type signinType= z.infer<typeof signinScheme>

export {signinScheme, type signinType}