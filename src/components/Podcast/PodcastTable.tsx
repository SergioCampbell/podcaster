"use client";
import { Result } from "@/interface/podcastDetail";
import { TABLE_HEADER } from "@/libs/constans";
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  getSortedRowModel,
} from "@tanstack/react-table";
import type { ColumnDef, SortingState } from "@tanstack/react-table";
import { useState } from "react";

interface ReactTableProps<T extends object> {
  data: Result[];
}

export const PodcastTable = <T extends object>({
  data,
}: ReactTableProps<T>) => {
  const columns: ColumnDef<Result>[] = [
    {
      header: TABLE_HEADER.Title,
      cell: (row) => row.renderValue(),
      accessorKey: "trackName",
    },
    {
      header: TABLE_HEADER.Date,
      cell: ({ row }) => {
        const date = new Date(row.original.releaseDate);
        return date.toLocaleDateString("es-ES");
      },
      accessorKey: "releaseDate",
    },
    {
      header: TABLE_HEADER.Duration,
      cell: ({ row }) => {
        const minutes = Math.floor(row.original.trackTimeMillis / 60000);
        const seconds = Math.floor(
          (row.original.trackTimeMillis % 60000) / 1000
        );
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
      },
      accessorKey: "trackTimeMillis",
    },
  ];
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden p-2">
            <table className="min-w-full text-center">
              <thead className="border-b bg-gray-50">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-6 py-4 text-sm font-medium text-gray-900"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        {{
                          asc: "▲",
                          desc: "▼",
                        }[header.column.getIsSorted() as string] ?? ""}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className='border-b" bg-white'>
                    {row.getVisibleCells().map((cell) => (
                      <td
                        className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900"
                        key={cell.id}
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
        </div>
      </div>
    </div>
  );
};
