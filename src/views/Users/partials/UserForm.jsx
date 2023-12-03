import { Controller } from 'react-hook-form'
import Input from '../../../compoents/Input'

const UserForm = ({ showPassword, setShowPassword, errors, control, editPage }) => {
    return (
        <>

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
                        placeholder="kalaTabij@soumik.com"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.email?.message}
                        labelRequired
                        disabled={editPage ? true : false}
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
                        autoComplete="new-password"
                        labelRequired={editPage ? false : true}
                    />
                )}
            />

        </>
    )
}

export default UserForm