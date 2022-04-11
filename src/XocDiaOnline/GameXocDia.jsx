import React from 'react'
import CuaDatThem from './CuaDatThem'
import DiemCuocvaNgheVi from './DiemCuocvaNgheVi'
import XocDiaChanLe from './XocDiaChanLe'

export default function GameXocDia() {

  return (
    <div>
      <div className="text-center pt-5">
        <h1 className='pt-5'>REDUX- REACT DEMO XÓC ĐĨA</h1>
      </div>
      <DiemCuocvaNgheVi></DiemCuocvaNgheVi>
      <XocDiaChanLe></XocDiaChanLe>
      <CuaDatThem></CuaDatThem>

    </div>


  )
}
