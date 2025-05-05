import React from "react";

const Table = ({ headers, data, className }) => {
  return (
    <table
      className={`w-full table-auto border-collapse overflow-hidden rounded-lg shadow-md ${className}`}
    >
      <thead className="bg-blue-100 text-blue-900">
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className="border-b px-6 py-3 text-left text-sm font-semibold"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {data.length > 0 ? (
          data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-blue-50 transition duration-150"
            >
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex} className="px-6 py-4 text-sm text-gray-700">
                  {cell !== null && cell !== undefined ? String(cell) : "N/A"}{" "}
                  {/* Convert to string and handle null/undefined */}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={headers.length}
              className="px-6 py-4 text-sm text-gray-700 text-center"
            >
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
