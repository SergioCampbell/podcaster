"use client";

import { Result } from "@/interface/podcastDetail";
import { TABLE_HEADER } from "@/libs/constans";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  getSortedRowModel,
} from "@tanstack/react-table";
import type { ColumnDef, SortingState } from "@tanstack/react-table";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

interface ReactTableProps<T extends object> {
  data: Result[];
}

export const PodcastTable = <T extends object>({
  data,
}: ReactTableProps<T>) => {
  const { podcastId } = useParams();

  const columns: ColumnDef<Result>[] = [
    {
      header: TABLE_HEADER.Title,
      accessorKey: "trackName",
      cell: ({ row }) => {
        const episodeId = row.original.trackId;
        return (
          <Link
            href="/podcast/[podcastId]/episode/[episodeId]"
            as={`/podcast/${podcastId}/episode/${episodeId}`}
            style={{ textDecoration: "none" }}
          >
            {row.original.trackName}
          </Link>
        );
      },
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
    <TableContainer>
      <Table>
        <TableHead sx={{ cursor: "pointer" }}>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell
                  sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
                  component="th"
                  scope="row"
                  key={header.id}
                  colSpan={header.colSpan}
                >
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell component="td" scope="row" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
