import { useParams } from "react-router-dom";
import { atomToken } from "../../hooks/atomState";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { axiosGET } from "../../hooks/axiosMethods";
import DashboardCardAdd from "../../compoents/DashLayout/DashboardCardAdd";
import UpdateItem from "./partials/UpdateItem";

const EditItem = () => {

    // globald
    const { itemId } = useParams();
    const [token] = useAtom(atomToken);

    // states
    const [itemData, setItemData] = useState(null);

    // fetch user data
    useEffect(() => {
        const fetchItem = async () => {
            try {
                const data = await axiosGET(`item/${itemId}`, token);
                setItemData(data)
            } catch (error) {
                console.log(error);
                throw error;
                // toast.error(`${error.response.data.message}`);
            }
        }
        fetchItem();
    }, [token, itemId])

    return (
        <>
            <DashboardCardAdd
                path='/item'
                title='Back Items'
            />

            {itemData && <UpdateItem
                item={itemData}
            />}

        </>
    )
}

export default EditItem