import DashboardCardAdd from "../../compoents/DashLayout/DashboardCardAdd"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosGET } from "../../hooks/axiosMethods";
import { useAtom } from "jotai";
import { atomToken } from "../../hooks/atomState";
import UpdateUser from "./partials/UpdateUser";

const EditUser = () => {

    // global
    const { userId } = useParams();
    const [token] = useAtom(atomToken);

    // states
    const [userData, setUserData] = useState(null);

    // fetch user data
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await axiosGET(`user/${userId}`, token);
                setUserData(data)
            } catch (error) {
                console.log(error);
                throw error;
                // toast.error(`${error.response.data.message}`);
            }
        }
        fetchUser();
    }, [token, userId])

    return (
        <>
            <DashboardCardAdd
                path='/user'
                title='Back User'
            />

            {userData && <UpdateUser
                user={userData}
            />}

        </>
    )
}

export default EditUser