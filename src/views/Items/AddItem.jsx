import { useState } from "react";
import { useForm } from "react-hook-form";
import { itemSchema } from "./utils/ItemConst";
import { yupResolver } from '@hookform/resolvers/yup';
import { cx } from "../../hooks/helpers";
import { iconSize } from "../../config/constants";
import { AiOutlineFileAdd } from "react-icons/ai";
import Button from "../../compoents/Button";
import ItemForm from "./partials/ItemForm";
import DashboardCardAdd from "../../compoents/DashLayout/DashboardCardAdd";
import { axiosPOST } from "../../hooks/axiosMethods";
import toast from "react-hot-toast";
import { useAtom } from "jotai";
import { atomToken } from "../../hooks/atomState";

const AddItem = () => {

    // global
    const [token] = useAtom(atomToken);

    // hooks
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(itemSchema),
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
    });

    // states
    const [loading, setLoading] = useState(false);

    // handler
    const handleAddItem = async (formData) => {
        try {
            // getting data
            const getPOST = await axiosPOST('item', formData, setLoading, token);

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
                path='/item'
                title='Back Item'
            />


            <form className="flex flex-col gap-y-5" onSubmit={handleSubmit(handleAddItem)}>

                <ItemForm
                    control={control}
                    errors={errors}
                />

                <div className="flex justify-end">
                    <Button
                        text='Add New Item'
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

export default AddItem