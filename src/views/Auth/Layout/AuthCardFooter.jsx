import { Link } from 'react-router-dom'

const AuthCardFooter = ({ text, linkText, url }) => {
    return (
        <div className="mt-2 flex flex-col justify-center items-center">
            <p>
                {text} {` `}
                <Link to={url} className='mt-2 hover:underline hover:text-primary-700 text-primary trans'>
                    {linkText}
                </Link>
            </p>

            <Link to='/' className='mt-2 hover:underline hover:text-primary-700 text-primary trans'>
                Go back to Home
            </Link>
        </div>
    )
}

export default AuthCardFooter