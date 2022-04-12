import React from 'react'
import { useDispatch } from 'react-redux'
import QuanCuoc from './QuanCuoc'

export default function XocDiaChanLe() {
  const dispatch = useDispatch();
  return (
    <div className="row text-center container m-auto">
      <div className="col-3">
        <button className='btn btn-dark' style={{
          margin: 'auto',
          margin: '50%'
        }} onClick={() =>{
          dispatch({
            type: 'XOC_DIA'
          })
        }}>
          <h1>Mở Bát</h1>
        </button>
      </div>
      <div className="col-6">
        <div className='batDia'>
          <img src="./img/dia.png" alt="" style={{
            width: '65%'
          }} />
          <QuanCuoc></QuanCuoc>
          <img src="./img/bat.png" className='image' id='bat' alt="" style={{
            cursor: 'pointer'
          }} />
        </div>
      </div>
      <div className="col-3">
        <button className='btn btn-dark' onClick={()=>{
          document.getElementById('bat').style.display = 'block';
        }} style={{
          margin: 'auto',
          margin: '50%'
        }}>
          <h1>Úp Bát</h1>
        </button>
      </div>
    </div>
  )
}
