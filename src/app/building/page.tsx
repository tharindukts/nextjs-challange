import React from 'react';
import axios from "axios";
import BuildingTable from "../../components/buildingTable";
import {getSession} from "../actions/auth";

async function getData() {
    try {
        const session = await getSession()

        if (session != null) {
            const res = await axios.get(
                process.env.DATA_FETCH_URL + session.token)

            return res.data
        }

    } catch (err) {
        console.log(err)
    }
}

async function Page() {

    const data = await getData()
    return (
        <BuildingTable tableData={data} />
    );
}

export default Page;