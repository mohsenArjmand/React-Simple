import React from 'react'

export default function Table({ data, columns, rowKey }) {

    return (
        <div>Table
            <table>
                <thead>
                    <tr>
                        {columns.map((col) => {
                            return (<th key={col.value}>
                                {col.title}
                            </th>)
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((records) => (
                        <tr key={'tr'+records[rowKey]}>
                            {columns.map((col) => {
                                return (<td key={ col.value + records[rowKey]}>
                                    {col.render ? col.render(records[col.value], records) : records[col.value]} 
                                </td>)
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
