import React from "react";
import {Button} from "react-bootstrap"
import { useDispatch } from "react-redux";
import {fetchOrphan, patchOrphan } from "../redux/user"



const OrphanComponent = (data) => {
  let dispatch = useDispatch()
  function clickHandler(e, id){
    e.preventDefault()
    dispatch(patchOrphan(id)).then(() => {
      dispatch(fetchOrphan())
    })
  }

  let number = 1 + data.index

  if (data.data.verified) {
    return (
      <tr>
        <td>{number}</td>
        <td>{data.data.fullName}</td>
        <td>{data.data.email}</td>
        <td>Verified</td>
        <td></td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{number}</td>
        <td>{data.data.fullName}</td>
        <td>{data.data.email}</td>
        <td>Not Verified</td>
        <td>
          <Button
           onClick={(e) => clickHandler(e, data.data.id)}
           variant="primary">Approve</Button>
        </td>
      </tr>
    );
  }
};

export default OrphanComponent;
