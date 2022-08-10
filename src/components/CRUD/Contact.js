import React from "react";
import Button from "react-bootstrap/Button";

export const Contact = ({ nama, nomor, onEdit, onRemove }) => {
  return (
    <li className="list-group-item border">
      <div className="d-flex">
        <div className="w-75 align-items-center">
          <h3>{nama}</h3>
          <p className="text-muted" style={{ fontSize: "18px" }}>
            {nomor}
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Button className="mx-2" onClick={onEdit}>
            Edit
          </Button>
          <Button className="bg-danger border-0" onClick={onRemove}>
            Hapus
          </Button>
        </div>
      </div>
    </li>
  );
};
