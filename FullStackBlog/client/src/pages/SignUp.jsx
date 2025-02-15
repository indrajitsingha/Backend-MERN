import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from 'react-router-dom'
import { Signin, Signup } from '@/helpers/RoutesList'


const SignUp = () => {
    const formSchema = z.object({
        name: z.string().min(3, "name should be 3 characters long"),
        email: z.string().email(),
        password: z.string().min(8, "password must be at least 8 characters"),
        confirmpassword: z.string().refine((data)=>data.password === data.confirmpassword, " confirmation password should be same as password"),
    })

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmpassword: ""
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
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="enter your email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
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
                        <div className="mb-3">
                            <FormField
                                control={form.control}
                                name="confirmpassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confim Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="enter your confirmpassword" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="mt-5">
                            <Button variant="destructive" type="submit"  className="w-full">Sign In</Button>
                            <div className=" flex justify-end items-center mt-5 ">
                                <p>Already have acount ?</p>
                                <Link to={Signin} className=' text-destructive'> &nbsp; Sign In </Link>

                            </div>
                        </div>
                    </form>
                </Form>

            </Card>
        </div>
    )
}

export default SignUp