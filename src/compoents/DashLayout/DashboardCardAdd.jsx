import { Link } from 'react-router-dom'

const DashboardCardAdd = ({ path, title }) => {
    return (
        <div className="my-3 border-y-2 py-2 flex justify-end px-1">
            <Link
                to={path}
                className="transition ease-in-out duration-500 text-white py-2.5 font-medium bg-primary-600 hover:bg-primary rounded-lg w-[100px] flex justify-center"
            >
                {title}
            </Link>
        </div>
    )
}

export default DashboardCardAdd