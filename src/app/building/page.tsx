import React from 'react';
import axios from "axios";
import BuildingTable from "../../components/buildingTable";
import {getSession} from "../action";

async function getData() {
    try {
        const session = await getSession()
        if (session != null) {
            const res = await axios.get(
                'https://gfiaywyod1.execute-api.ap-southeast-2.amazonaws.com/dev/buildings/list?token=' + session.token)

            return res.data
        }

    } catch (err) {
       console.log(err)
    }
}

async function Page() {

    const data = await getData()
    return (
        <div className="min-h-screen flex  justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <BuildingTable tableData={data}/>
            </div>
        </div>
    );
}

export default Page;