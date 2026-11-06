'use client'

import { Button } from "@/components/ui/button"
import {
Card,
CardContent,
CardHeader,
CardTitle,
} from "@/components/ui/card"
import {
Field,
FieldDescription,
FieldGroup,
FieldLabel,
FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { signIn, signUp } from "../../lib/auth-client"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export default function SignupPage() {

const router = useRouter()

const handleSignup = async (e: React.SubmitEvent<HTMLFormElement>) => {
e.preventDefault()

const formdata = new FormData(e.currentTarget)

const user = Object.fromEntries(
  formdata.entries()
) as {
  name: string
  image: string
  email: string
  password: string
}

if (!/[A-Z]/.test(user.password)) {
  toast.error("Password must contain an uppercase letter!")
  return
}

if (!/[a-z]/.test(user.password)) {
  toast.error("Password must contain a lowercase letter!")
  return
}

if (user.password.length < 6) {
  toast.error("Password must be at least 6 characters!")
  return
}

try {
  const { data, error } = await signUp.email({
    ...user,
  })

  if (error) {
    toast.error(error.message || "Registration failed!")
    return
  }

  if (data) {
    toast.success("Registration successful!")
    router.push("/Login")
  }

} catch {
  toast.error("Something went wrong. Please try again.")
}

}

const handleGoogleSignup = async () => {
  try {
    const { error } = await signIn.social({
      provider: "google",
      callbackURL: "https://project-name-client-vy55.vercel.app",
    });

    if (error) {
      toast.error(error.message || "Google login failed!");
    }
  } catch {
    toast.error("Something went wrong. Please try again.");
  }
};
return ( <div className="flex flex-col gap-6 max-w-6xl mx-auto my-10"> <Card> <CardHeader className="text-center"> <CardTitle className="text-2xl font-bold">
Create an account </CardTitle> </CardHeader>


    <CardContent>
      <form onSubmit={handleSignup}>
        <FieldGroup>

          <Field>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Type your name"
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="image">Photo URL</FieldLabel>
            <Input
              id="image"
              type="url"
              name="image"
              placeholder="Place your image URL"
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              type="password"
              name="password"
              required
            />
          </Field>

          <Field>
            <Button type="submit">Register</Button>

            <FieldDescription className="text-center">
              Already have an account?{" "}
              <Link href="/Login" className="underline">
                Login
              </Link>
            </FieldDescription>
          </Field>

          <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
            Or continue with
          </FieldSeparator>

          <Field>
            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleSignup}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  fill="currentColor"
                />
              </svg>

              Sign up with Google
            </Button>
          </Field>

        </FieldGroup>
      </form>
    </CardContent>
  </Card>

  <FieldDescription className="px-6 text-center">
    By clicking continue, you agree to our{" "}
    <a href="#">Terms of Service</a>{" "}
    and <a href="#">Privacy Policy</a>.
  </FieldDescription>
</div>

)
}
