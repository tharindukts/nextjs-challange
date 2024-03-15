"use client";

import {BuildingDto} from "../dto/BuildingDto";
import React, {useState} from "react";
import {revalidateBuildingData} from "../app/actions/auth";

interface BuildingDataProps {
    tableData: BuildingDto[]
}

const TABLE_HEAD = ["Name", "Street", "City", "State"];
const PAGE_SIZE = 10;

function BuildingTable({tableData}: BuildingDataProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(tableData.length / PAGE_SIZE);

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = Math.min(startIndex + PAGE_SIZE, tableData.length);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const refreshData = async () => {
        await revalidateBuildingData();
    };
    return (
        <div className=" flex  h-full    sm:px-6 lg:px-8 mt-6 flex  items-center justify-center  ">
            <div className=" space-y-4 w-full ">
                <h2 className="text-4xl d text-gray-600">
                    Building Information
                    <span className="m-5 ">
                        <button onClick={()=>refreshData()}
                            className="relative inline-flex items-center justify-center
                            p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900
                            rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500
                            group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white
                            dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75
                                            bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        refresh
                            </span>
                        </button>
                    </span>
                </h2>

                <div className="py-12">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead className="bg-amber">
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
                            {tableData.slice(startIndex, endIndex).map(({name, streetName, city, state}, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="p-4">{name}</td>
                                        <td className="p-4">{streetName}</td>
                                        <td className="p-4">{city}</td>
                                        <td className="p-4">{state}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div className="flex justify-end mt-4">
                        {/* Pagination */}
                        <div>
                            {Array.from({length: totalPages}, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => handlePageChange(i + 1)}
                                    className={`mx-1 px-3 py-1 rounded ${
                                        currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuildingTable;