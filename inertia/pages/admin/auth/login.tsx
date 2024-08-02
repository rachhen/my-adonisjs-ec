import type { SharedProps } from '@adonisjs/inertia/types'
import { Head, Link, useForm } from '@inertiajs/react'
import { route } from '@izzyjs/route/client'

import type { LoginInput } from '#validators/auth'
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

function LoginPage({ flashMessages }: SharedProps) {
  const { post, setData, errors, processing } = useForm<LoginInput>()

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    post(route('admin.auth.login.store').url)
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Head title="Login" />
      <form onSubmit={submit} className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                onChange={(e) => setData('email', e.target.value)}
              />
              {errors.email && (
                <span className="text-xs text-destructive -mt-2">{errors.email}</span>
              )}
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
                <span className="text-xs text-destructive -mt-2">{errors.password}</span>
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
              Login
            </Button>
            <p className="text-sm pt-2">
              Don't have an account?{' '}
              <Link
                className="text-primary hover:underline"
                href={route('admin.auth.register.show').url}
              >
                Register
              </Link>
            </p>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

export default LoginPage
