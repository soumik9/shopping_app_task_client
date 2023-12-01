import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useState } from 'react';
import toast from 'react-hot-toast';
import AuthCardLayout from '../Layout/AuthCardLayout';
import AuthCardFooter from '../Layout/AuthCardFooter';
import Button from '../../../compoents/Button';
import { axiosPOST } from '../../../hooks/axiosMethods';
import Input from '../../../compoents/Input';

const loginSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    password: Yup.string().required("password is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
});


const Signup = () => {

    // hooks
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
    });

    // states
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // signup action
    const handleSignup = async (data) => {
        // getting data
        const getPOST = await axiosPOST('auth/signup', data, setLoading);

        // if success
        if (getPOST.success) {
            reset();
            toast.success(getPOST.message);
        }
    }

    return (
        <AuthCardLayout>
            <form onSubmit={handleSubmit(handleSignup)}>
                <div className="divide-y divide-gray-200">
                    <div className="pt-8 text-base leading-6 space-y-3 text-gray-700 sm:text-lg sm:leading-7">

                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    label="Name"
                                    id="name"
                                    type="text"
                                    placeholder="Soumik Ahammed"
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={errors.name?.message}
                                    labelRequired
                                />
                            )}
                        />

                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    label="Email"
                                    id="email"
                                    type="email"
                                    placeholder="soumik@gmail.com"
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={errors.email?.message}
                                    labelRequired
                                />
                            )}
                        />

                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    label="Password"
                                    id="password"
                                    placeholder="****************"
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={errors.password?.message}
                                    type={showPassword ? 'text' : 'password'}
                                    showPassword={showPassword}
                                    setShowPassword={setShowPassword}
                                    passwordToggle
                                    labelRequired
                                    autoComplete="new-password"
                                />
                            )}
                        />
                    </div>

                    <div className="mt-6">
                        <Button
                            text='Create Account'
                            css='w-full'
                            isLoading={loading}
                            loadingText='Creating'
                        />
                    </div>

                </div>
            </form>

            <AuthCardFooter
                text={`Have account?`}
                url='/login'
                linkText='Login Here'
            />
        </AuthCardLayout>
    )
}

export default Signup