import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { userUpdateSchema } from '../utils/UserConst';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiOutlineUpload } from 'react-icons/ai';
import { cx } from '../../../hooks/helpers';
import { iconSize } from '../../../config/constants';
import Button from '../../../compoents/Button';
import { axiosPatch } from '../../../hooks/axiosMethods';
import toast from 'react-hot-toast'
import UserForm from './UserForm';
import { useAtom } from 'jotai';
import { atomToken } from '../../../hooks/atomState';

const UpdateUser = ({ user }) => {

    const [token] = useAtom(atomToken);

    // hooks
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(userUpdateSchema),
        defaultValues: {
            name: user.name,
            email: user.email,
            password: ''
        },
    });

    // states
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    const handleUpdateUser = async (formData) => {
        try {
            // getting data
            const getPOST = await axiosPatch(`user/${user._id}`, formData, setLoading, token);

            // if success
            if (getPOST.success) {
                toast.success(getPOST.message);
            }

        } catch (error) {
            setLoading(false);
            toast.error(`${error.response.data.message}`);
        }
    }


    return (
        <>
            <form className="flex flex-col gap-y-5" onSubmit={handleSubmit(handleUpdateUser)}>

                <UserForm
                    control={control}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    errors={errors}
                />

                <div className="flex justify-end">
                    <Button
                        text='Update User'
                        variant="contained"
                        startIcon={<AiOutlineUpload className={cx(iconSize)} />}
                        css='w-full lg:w-[160px]'
                        isLoading={loading}
                        loadingText='Adding'
                        disabled={loading}
                    />
                </div>

            </form>

        </>
    )
}

export default UpdateUser