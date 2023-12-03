import { IoCogOutline, IoTrash } from 'react-icons/io5';
import { Link } from 'react-router-dom'
import { cx } from '../../../hooks/helpers';
import Swal from 'sweetalert2'
import { axiosDelte } from '../../../hooks/axiosMethods';
import { useAtom } from 'jotai';
import { atomToken } from '../../../hooks/atomState';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useQueryClient } from 'react-query';

const actionBtnClass = 'text-[22px] p-1.5 rounded-lg text-white cursor-pointer trans'
const actionBtnIconClass = 'cursor-pointer'

const ItemActionBtn = ({ id }) => {

    // global
    const [token] = useAtom(atomToken);
    const queryClient = useQueryClient();

    // states
    const [loading, setLoading] = useState(false)

    // delete
    const handleDeleteItem = (itemId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                const deleteItem = async () => {
                    try {
                        // getting data
                        const getPOST = await axiosDelte(`item/${itemId}`, setLoading, token);

                        // if success
                        if (getPOST.success) {
                            queryClient.invalidateQueries('items');
                            Swal.fire({
                                title: "Deleted!",
                                text: getPOST.message,
                                icon: "success"
                            });
                        }

                    } catch (error) {
                        setLoading(false);
                        toast.error(`${error.response.data.message}`);
                    }
                }

                deleteItem();
            }
        });
    }

    return (
        <div className='flex gap-[7px]'>

            <Link
                to={`/item/edit/${id}`}
                className={cx(
                    actionBtnClass,
                    'bg-warning hover:bg-warning-hover'
                )}
            >
                <IoCogOutline
                    className={cx(actionBtnIconClass)}
                />
            </Link>

            <button
                className={cx(
                    actionBtnClass,
                    'bg-error hover:bg-error-hover'
                )}
                onClick={() => handleDeleteItem(id)}
            >
                {loading ? <>..</> : <IoTrash
                    className={cx(actionBtnIconClass)}
                />}

            </button>

        </div>
    )
}

export default ItemActionBtn