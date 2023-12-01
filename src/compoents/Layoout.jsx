import Header from './Header'

const Layoout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layoout