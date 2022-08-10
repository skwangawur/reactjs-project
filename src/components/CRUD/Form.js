import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export const ContactForm = ({ onSubmit, onChange, value }) => {
  return (
    <Form
      onSubmit={onSubmit}
      className="contact-form"
      style={{ fontSize: "20px" }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="nama"
          id="nama"
          type="text"
          placeholder="Fill your contact name"
          onChange={onChange}
          value={value.nama}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="number"
          name="nomor"
          id="nomor"
          placeholder="Fill your contact number"
          onChange={onChange}
          value={value.nomor}
        />
      </Form.Group>
      <Button type="submit" className="mx-2">
        Save Contact
      </Button>
      <Button className="btn-danger">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          Back To Home
        </Link>
      </Button>
    </Form>
  );
};
