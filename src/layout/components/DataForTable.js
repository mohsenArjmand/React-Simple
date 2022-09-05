
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from './Table'

const columns = [
    { title: 'ID', value: 'id' },
    { title: 'Name', value: 'name' },
    {
        title: 'Address', value: 'address',
        render: (field, record) => `${field.city} | ${record.website}`
    }
]

export default function DataForTable() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(Response => { setData(Response.data) })
    }, [])

    return <Table data={data} columns={columns} rowKey='id' />
}
