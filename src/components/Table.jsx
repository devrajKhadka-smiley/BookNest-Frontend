import React from "react";
import { FaPen } from "react-icons/fa"; // Import Edit icon

const Table = ({ headers, data, className, width = "full" }) => {
  const keyMap = [
    "id",
    "title",
    "price",
    "discountedPrice",
    "rating",
    "numberOfReviews",
  ];
  return (
    <table
      className={`w-${width} table-auto border-collapse overflow-hidden rounded-lg shadow-md ${className}`}
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
              {keyMap.map((key, cellIndex) => (
                <td key={cellIndex} className="px-6 py-4 text-sm text-gray-700">
                  {key === "discountedPrice"
                    ? row[key] !== null &&
                      row[key] !== undefined &&
                      row[key] !== ""
                      ? String(row[key])
                      : "N/A"
                    : row[key] !== null && row[key] !== undefined
                    ? String(row[key])
                    : "N/A"}
                </td>
              ))}

              <td className="px-6 py-4 text-sm text-gray-700">
                <button
                  onClick={() => alert(`Edit book with ID: ${row.id}`)}
                  className="text-black"
                >
                  <FaPen />
                </button>
              </td>
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
