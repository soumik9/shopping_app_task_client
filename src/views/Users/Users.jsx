import { useQuery } from "react-query"
import { axiosGET } from "../../hooks/axiosMethods";
import { useAtom } from "jotai";
import { atomToken } from "../../hooks/atomState";
import DataTable from 'react-data-table-component'
import ActionsBtn from "./partials/ActionBtn";
import DashboardCardAdd from "../../compoents/DashLayout/DashboardCardAdd";
import { cx } from "../../hooks/helpers";
import { inputCmnClass } from "../../compoents/Input";
import { useState, useEffect } from "react";

const Users = () => {

    // global
    const [token] = useAtom(atomToken);

    // states
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // query
    const { isLoading, isError, data } = useQuery(['users'], async () => {
        try {
            const data = await axiosGET('user', token);
            return data;
        } catch (error) {
            console.log(error);
            // toast.error(`${error.response.data.message}`);
        }
    })

    // filtering data
    useEffect(() => {
        if (searchText) {
            const gotDataBySearchText = data.filter((item) =>
                item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                item.email.toLowerCase().includes(searchText.toLowerCase())
            );
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
            name: 'Email',
            selector: (row) => row.email,
            filterable: true,
        },
        {
            name: 'Ceated By',
            selector: (row) => row.createdBy,
            filterable: true,
        },
        {
            name: 'Action',
            cell: (row) => <ActionsBtn id={row._id} />,
        },
    ];

    if (isLoading) return <div className="f-center">Loading ....</div>
    if (isError) return <div className="f-center">Error on server ....</div>

    return (
        <div>

            <DashboardCardAdd
                path='/user/add'
                title='Add User'
            />

            <div className="mb-2 flex justify-end">
                <input
                    type="text"
                    className={cx(inputCmnClass, 'w-[300px]')}
                    placeholder="Search by name/email"
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
        </div>
    )
}

export default Users