import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function DataList({ data }) {
    return (
        <div>
            {data.map((dataDetail, indx) => {
                return <ul><li>{dataDetail.name}</li></ul>
            })}
        </div>
    )
}