import { useEffect, useState } from "react";
import DashboardCardAdd from "../../compoents/DashLayout/DashboardCardAdd"
import { inputCmnClass } from "../../compoents/Input"
import { axiosGET } from "../../hooks/axiosMethods";
import { useQuery } from "react-query";
import { useAtom } from "jotai";
import { atomToken } from "../../hooks/atomState";
import { cx } from "../../hooks/helpers";
import DataTable from "react-data-table-component";
import ItemActionBtn from "./utils/ItemActionBtn";

const Items = () => {

    // global
    const [token] = useAtom(atomToken);

    // states
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // query
    const { isLoading, isError, data } = useQuery(['items'], async () => {
        try {
            const data = await axiosGET('item', token);
            return data;
        } catch (error) {
            console.log(error);
            // toast.error(`${error.response.data.message}`);
        }
    })

    // filtering data
    useEffect(() => {
        if (searchText) {
            const gotDataBySearchText = data.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredData(gotDataBySearchText);
        } else if (data) {
            setFilteredData(data)
        } else {
            setFilteredData([]);
        }
    }, [searchText, data])

    // datas
    const columns = [
        {
            name: 'Name',
            selector: (row) => row.name,
            filterable: true,
            sortable: true,
        },
        {
            name: 'Ceated By',
            selector: (row) => row.createdBy.name,
            filterable: true,
        },
        {
            name: 'Action',
            cell: (row) => <ItemActionBtn id={row._id} />,
        },
    ];

    if (isLoading) return <div className="f-center">Loading ....</div>
    if (isError) return <div className="f-center">Error on server ....</div>

    return (
        <>

            <DashboardCardAdd
                path='/item/add'
                title='Add Item'
            />

            <div className="mb-2 flex justify-end">
                <input
                    type="text"
                    className={cx(inputCmnClass, 'w-[300px]')}
                    placeholder="Search by name"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>

            <DataTable
                columns={columns}
                data={filteredData}
                highlightOnHover
                progressPending={isLoading}
                pagination
                persistTableHead={true}
                paginationPerPage={15}
            />
        </>
    )
}

export default Items