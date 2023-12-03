import { IoCogOutline, IoTrash } from 'react-icons/io5';
import { Link } from 'react-router-dom'
import { cx } from '../../../hooks/helpers';

const actionBtnClass = 'text-[22px] p-1.5 rounded-lg text-white cursor-pointer trans'
const actionBtnIconClass = 'cursor-pointer'

const ActionsBtn = ({ id }) => {
    return (
        <div className='flex gap-[7px]'>

            <Link
                to={`/user/edit/${id}`}
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
            // onClick={() => handleDeleteUser(row._id)}
            >
                <IoTrash
                    className={cx(actionBtnIconClass)}
                />
            </button>

        </div>
    )
}

export default ActionsBtn