import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import { productRows } from '../../dummyData';
import './index.css'

const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 250, renderCell: (params) => {
          return (
            <div className='productListItem'>
              <img src={params.row.img} alt="product" className='productListImg' />
              {params.row.name}
            </div>
          )
        } },
        { field: 'stock', headerName: 'Stock', width: 100 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 180,
        },
        {
          field: 'action',
          headerName: 'Actions',
          width: 150,
          renderCell: (params) => (
            <>
              <Link to={'/product/' + params.row.id}>
                <button className="productListEdit">Edit</button>
              </Link>
              <DeleteForeverIcon className='productListDelete' onClick={() => handleDelete(params.row.id)} />
            </>
          )
        },
    ];

  return (
    <div className='productList'>
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

export default ProductList