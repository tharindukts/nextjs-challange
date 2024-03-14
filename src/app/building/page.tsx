import React from 'react';
import axios from "axios";
import BuildingTable from "../../components/buildingTable";
import {getSession} from "../actions/auth";

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
        <div className=" flex  h-full    sm:px-6 lg:px-8 mt-6 flex  items-center justify-center  ">
            <div className=" space-y-4 w-full " >
                <h2 className="text-4xl d text-gray-600">Payments tool for companies</h2>

                <BuildingTable tableData={data}/>
            </div>
        </div>
    );
}

export default Page;