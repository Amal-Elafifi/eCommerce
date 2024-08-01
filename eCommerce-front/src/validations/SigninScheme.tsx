import { z } from "zod";

const signinScheme = z.object({
  email: z.string().email().min(1,{message: "Email is required"}),
  password: z.string().min(1, {message: "Password is required"}),
})


type signinType= z.infer<typeof signinScheme>

export {signinScheme, type signinType}