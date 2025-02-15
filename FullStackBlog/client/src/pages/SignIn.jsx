import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from 'react-router-dom'
import { Signup } from '@/helpers/RoutesList'

const SignIn = () => {
    const formSchema = z.object({
        email: z.string().email(),
        password: z.string().min(8, "password must be at least 8 characters"),
    })

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })



    // 2. Define a submit handler.
    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div className=' flex justify-center items-center h-screen w-screen'>
            <Card className="w-[400px] p-5 ">
                <h1 className=' text-2xl font-bold text-center'>Login Into Acount</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="mb-3">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="enter your email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="mb-3">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="enter your password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="mt-5">
                            <Button variant="destructive" type="submit" className="w-full">Sign In</Button>
                            <div className=" flex justify-end items-center mt-5 ">
                                <p>Don&apos;t have acount ?</p>
                                <Link to={Signup} className=' text-destructive'> &nbsp; Sign Up </Link>

                            </div>
                        </div>
                    </form>
                </Form>

            </Card>
        </div>
    )
}

export default SignIn