import { useState } from 'react'
import { axiosPatch } from '../../../hooks/axiosMethods';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiOutlineUpload } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { useAtom } from 'jotai';
import { atomToken } from '../../../hooks/atomState';
import { itemSchema } from '../utils/ItemConst';
import Button from '../../../compoents/Button';
import { iconSize } from '../../../config/constants';
import { cx } from '../../../hooks/helpers';
import ItemForm from './ItemForm';

const UpdateItem = ({ item }) => {

    // global
    const [token] = useAtom(atomToken);

    // hooks
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(itemSchema),
        defaultValues: {
            name: item.name,
        },
    });

    // states
    const [loading, setLoading] = useState(false);

    // handler
    const handleUpdateItem = async (formData) => {
        try {
            // getting data
            const getPOST = await axiosPatch(`item/${item._id}`, formData, setLoading, token);

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
            <form className="flex flex-col gap-y-5" onSubmit={handleSubmit(handleUpdateItem)}>

                <ItemForm
                    control={control}
                    errors={errors}
                />

                <div className="flex justify-end">
                    <Button
                        text='Update Item'
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

export default UpdateItem