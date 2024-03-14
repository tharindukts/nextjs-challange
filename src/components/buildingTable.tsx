"use client"

import {BuildingDto} from "../dto/buildingDto";
import {useState} from "react";

interface BuildingDataProps {
    tableData: BuildingDto[]
}

const TABLE_HEAD = ["Name", "Street", "City", "State"];

function BuildingTable({tableData}: BuildingDataProps) {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total number of pages
    const totalPages = Math.ceil(tableData.length / 4);

    // Calculate index range for current page
    const startIndex = (currentPage - 1) * 4;
    const endIndex = Math.min(startIndex + 4, tableData.length);

    // Function to handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    return (
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
                {tableData.slice(startIndex, endIndex).map(({ name, streetName, city, state }, index) => {
                    return (
                        <tr key={name}>
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
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => handlePageChange(i + 1)}
                            className={`mx-1 px-3 py-1 rounded ${
                                currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BuildingTable;