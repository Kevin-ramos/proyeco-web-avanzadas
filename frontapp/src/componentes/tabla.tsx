import React, { useMemo } from 'react';
import { useTable } from 'react-table';

type Props = {
    data: any[];
    columns: any[];
};

const TableComponent = ({ data, columns }: Props) => {
    const tableData = useMemo(() => data, [data]);
    const tableColumns = useMemo(
        () => [
            ...columns,
            {
                Header: '',
                accessor: 'imageUrl',
                Cell: ({ value }: { value: string }) =><img src={value} style={{ width: "150px", height: "150px" }} alt="row item" />,

            },
        ],
        [columns],
    );

    const tableInstance = useTable({
        columns: tableColumns,
        data: tableData,
    });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    return (
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        ))}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

export default TableComponent;
