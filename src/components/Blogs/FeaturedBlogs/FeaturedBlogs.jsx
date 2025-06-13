import React, { useEffect, useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import { Link } from "react-router";
import axios from "axios";

const FeaturedBlogs = () => {
  const [data, setData] = useState([]);
  const [sorting, setSorting] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/featured-blogs").then((res) =>
      setData(res.data)
    );
  }, []);

  const columnHelper = createColumnHelper();

  const columns = useMemo(
    () => [
      columnHelper.accessor("title", {
        header: "Title",
        cell: (info) => {
          const blogId = info.row.original._id;
          return (
            <Link
              to={`/blog/${blogId}`}
              className="text-orange-500 font-medium hover:underline"
            >
              {info.getValue()}
            </Link>
          );
        },
      }),
      columnHelper.accessor("category", {
        header: "Category",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("authorName", {
        header: "Author",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("creationDate", {
        header: "Date",
        cell: (info) =>
          new Date(info.getValue()).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
      }),
      columnHelper.accessor("wordCount", {
        header: "Word Count",
        cell: (info) => info.getValue(),
      }),
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      {/* Gradient border wrapper */}
      <div className="bg-black p-[2px] rounded-2xl shadow-xl">
        {/* Inner white card */}
        <div className="bg-white rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="p-6  text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              🔥 Featured Blogs
            </h2>
            <p className="text-gray-500 mt-1 text-sm">
              Top 10 longest blogs by word count
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="bg-orange-100 text-orange-900 text-sm font-semibold">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="border-b border-gray-300">
                    {headerGroup.headers.map((header, i) => (
                      <th
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                        className={`px-6 py-3 text-left cursor-pointer select-none ${
                          i === 0
                            ? "rounded-tl-xl"
                            : i === headerGroup.headers.length - 1
                            ? "rounded-tr-xl"
                            : ""
                        }`}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getIsSorted()
                          ? header.column.getIsSorted() === "asc"
                            ? " 🔼"
                            : " 🔽"
                          : ""}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>

              <tbody>
                {table.getRowModel().rows.map((row, i) => (
                  <tr
                    key={row.id}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-orange-50 transition-all border-y border-gray-200`}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty fallback */}
          {data.length === 0 && (
            <p className="text-center text-gray-500 py-8">
              No blogs available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
