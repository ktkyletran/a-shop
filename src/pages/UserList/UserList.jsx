import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { userRows } from '../../dummyData';
import './index.css'
import { Link } from 'react-router-dom';


const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'userName', headerName: 'Username', width: 130, renderCell: (params) => {
      return (
        <div className='userListUser'>
          <img src={params.row.avatar} alt="avatar" className='userListImg' />
          {params.row.userName}
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Amount',
      width: 180,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <>
          <Link to={'/user/' + params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
          <DeleteForeverIcon className='userListDelete' onClick={() => handleDelete(params.row.id)} />
        </>
      )
    },
  ];
  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default UserList