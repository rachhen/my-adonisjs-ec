import { InferPageProps } from '@adonisjs/inertia/types'
import { Head, Link, useForm } from '@inertiajs/react'
import { route } from '@izzyjs/route/client'
import React from 'react'

import type HomeController from '#controllers/home_controller'
import { Button } from '~/components/ui/button'

export default function Home(props: InferPageProps<HomeController, 'index'>) {
  const form = useForm()

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    form.delete(route('admin.auth.logout').url)
  }

  return (
    <div className="flex flex-1 items-center justify-center h-screen">
      <Head title="Home" />
      {props.user ? (
        <div>
          <h3>{props.user.fullName}</h3>
          <form onSubmit={submit}>
            <Button type="submit">Logout</Button>
          </form>
        </div>
      ) : (
        <div className="flex gap-2">
          <Link
            href={route('admin.auth.register.show').url}
            className="text-primary hover:underline"
          >
            Register
          </Link>
          <Link href={route('admin.auth.login.show').url} className="text-primary hover:underline">
            Login
          </Link>
        </div>
      )}
    </div>
  )
}
