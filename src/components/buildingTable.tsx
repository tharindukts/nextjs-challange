"use client"

import {BuildingDto} from "../dto/buildingDto";

interface BuildingDataProps {
    tableData: BuildingDto[]
}

const TABLE_HEAD = ["Name", "Street", "City", "State"];

function BuildingTable({tableData}: BuildingDataProps) {
    return (
        <table className="w-full min-w-max table-auto text-left">
            <thead>
            <tr>
                {TABLE_HEAD.map((head) => (
                    <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                        {head}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {tableData && tableData.map(({name, streetName, city, state}, index) => {
                const isLast = index === tableData.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                    <tr key={name}>
                        <td className={classes}>
                            {name}
                        </td>
                        <td className={classes}>
                            {streetName}
                        </td>
                        <td className={classes}>
                            {city}
                        </td>
                        <td className={classes}>
                            {state}
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default BuildingTable;