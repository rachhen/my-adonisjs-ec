import type { SharedProps } from '@adonisjs/inertia/types'
import { Head, Link, useForm } from '@inertiajs/react'
import { route } from '@izzyjs/route/client'

import type { RegisterInput } from '#validators/auth'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

function RegisterPage({ flashMessages }: SharedProps) {
  const { post, setData, errors, processing } = useForm<RegisterInput>()

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    post(route('admin.auth.register.store').url)
  }

  console.log(errors)

  return (
    <div className="flex h-screen items-center justify-center">
      <Head title="Register" />
      <form onSubmit={submit} className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Register</CardTitle>
            <CardDescription>Enter your information to create an account</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Full Name"
                onChange={(e) => setData('fullName', e.target.value)}
              />
              {errors.fullName && (
                <span className="text-xs text-destructive">{errors.fullName}</span>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                onChange={(e) => setData('email', e.target.value)}
              />
              {errors.email && <span className="text-xs text-destructive">{errors.email}</span>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                onChange={(e) => setData('password', e.target.value)}
              />
              {errors.password && (
                <span className="text-xs text-destructive">{errors.password}</span>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex-col">
            {flashMessages.errorsBag && (
              <span className="text-destructive flex self-start mb-4">
                {flashMessages.errorsBag.E_INVALID_CREDENTIALS}
              </span>
            )}

            <Button className="w-full" type="submit" disabled={processing}>
              Register
            </Button>

            <p className="text-sm pt-2">
              Already have an account?{' '}
              <Link
                className="text-primary hover:underline"
                href={route('admin.auth.login.show').url}
              >
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

export default RegisterPage
