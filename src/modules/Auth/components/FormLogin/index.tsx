'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import Button from '@/components/ui/Button/Button'
import Section from '@/components/ui/Container/Section'
import FormInput from '@/components/ui/FormHook/FormInput'

import { UserSchema } from './schema'

const FormLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(UserSchema),
    })

    const onSubmit = (data: any) => console.log(data)

    return (
        <Section className="mx-auto mt-20">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
            >
                <FormInput
                    required
                    {...register('user')}
                    label="Username"
                    className="text-black"
                    errors={errors.user}
                />
                <FormInput
                    required
                    {...register('password')}
                    label="Password"
                    className="text-black"
                    errors={errors.password}
                />
                <div className="pt-5">
                    <Button className="bg-green-700 text-white" type="submit">
                        Login
                    </Button>
                </div>
            </form>
        </Section>
    )
}

export default FormLogin
