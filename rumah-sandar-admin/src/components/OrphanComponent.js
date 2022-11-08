import React from "react";
import {Button} from "react-bootstrap"

const OrphanComponent = (data) => {
  if (data.data.verified) {
    return (
      <tr>
        <td>{data.index}</td>
        <td>{data.data.fullName}</td>
        <td>{data.data.email}</td>
        <td>Verified</td>
        <td></td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{data.index}</td>
        <td>{data.data.fullName}</td>
        <td>{data.data.email}</td>
        <td>Not Verified</td>
        <td>
          <Button variant="primary">Approve</Button>
        </td>
      </tr>
    );
  }
};

export default OrphanComponent;
