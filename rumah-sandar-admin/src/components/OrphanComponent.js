import React from "react";
import {Button} from "react-bootstrap"
import { useDispatch } from "react-redux";
import {fetchOrphan, patchOrphan } from "../redux/user"
import {toast} from 'react-toastify'

const OrphanComponent = (data) => {
  console.log(data);
  let dispatch = useDispatch()
  function clickHandler(e, id){
    e.preventDefault()
    dispatch(patchOrphan(id)).then(() => {
      toast("Mengubah Status",{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
      dispatch(fetchOrphan())
    })
  }

  let number = 1 + data.index

  if (data.data.verified) {
    return (
      <tr>
        <td className="text-center">{number}</td>
        <td>{data.data.fullName}</td>
        <td>{data.data.email}</td>
        <td>{data.data.Orphanage.name}</td>
        <td>Terverifikasi</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td className="text-center">{number}</td>
        <td>{data.data.fullName}</td>
        <td>{data.data.email}</td>
        <td>{data.data.Orphanage.name}</td>
        <td>
          <Button
           onClick={(e) => clickHandler(e, data.data.id)}
           variant="primary">Verifikasi</Button>
        </td>
      </tr>
    );
  }
};

export default OrphanComponent;
