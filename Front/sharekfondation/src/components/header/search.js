import React from 'react'
import {Input } from "antd";
const { Search } = Input;

export default function search() {
    return (
        <div className="search">
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
          </div>
    )
}
