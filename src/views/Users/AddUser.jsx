import DashboardCardAdd from "../../compoents/DashLayout/DashboardCardAdd"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSchema } from "./utils/UserConst";
import { useState } from "react";
import Button from "../../compoents/Button";
import { cx } from "../../hooks/helpers";
import { AiOutlineFileAdd } from "react-icons/ai";
import { iconSize } from "../../config/constants";
import { axiosPOST } from "../../hooks/axiosMethods";
import toast from "react-hot-toast";
import { useAtom } from "jotai";
import { atomUser } from "../../hooks/atomState";
import UserForm from "./partials/UserForm";

const AddUser = () => {

    const [user] = useAtom(atomUser);

    // hooks
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(userSchema),
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
    });

    // states
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleAddUser = async (formData) => {
        try {
            // getting data
            const getPOST = await axiosPOST('auth/signup', { createdBy: user.name, ...formData }, setLoading);

            // if success
            if (getPOST.success) {
                reset();
                toast.success(getPOST.message);
            }

        } catch (error) {
            setLoading(false);
            toast.error(`${error.response.data.message}`);
        }
    }

    return (
        <>
            <DashboardCardAdd
                path='/user'
                title='Back User'
            />


            <form className="flex flex-col gap-y-5" onSubmit={handleSubmit(handleAddUser)}>

                <UserForm
                    control={control}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    errors={errors}
                />

                <div className="flex justify-end">
                    <Button
                        text='Add New User'
                        variant="contained"
                        startIcon={<AiOutlineFileAdd className={cx(iconSize)} />}
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

export default AddUser