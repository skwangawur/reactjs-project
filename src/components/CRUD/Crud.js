import axios from "axios";
import React, { useEffect, useState } from "react";
import { Contact } from "./Contact";
import { ContactForm } from "./Form";
import "bootstrap/dist/css/bootstrap.min.css";

export const Crud = () => {
  const URI = "http://localhost:8000/contacts";
  const initialUpdata = {
    id: "",
    status: false,
  };
  const [form, setForm] = useState({
    nama: "",
    nomor: "",
  });
  const [contacts, setContacts] = useState([]);
  const [update, setUpdate] = useState(initialUpdata);

  useEffect(() => {
    getContact();
  }, [update]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (update.status) {
      await axios.put(`${URI}/${update.id}`, form).catch((err) => alert(err));
    } else {
      if (form.nama !== "" && form.nomor !== "")
        await axios.post(URI, form).catch((err) => alert(err));
    }
    setUpdate(initialUpdata);
    setForm({ nama: "", nomor: "" });
  };

  console.log(update);
  const getContact = async () => {
    try {
      const res = await axios.get(URI);
      setContacts(res.data);
    } catch (error) {
      alert(error);
    }
  };

  const handleEdit = (id) => {
    const data = [...contacts];
    const foundData = data.find((contact) => contact.id === id);
    setForm({ nama: foundData.nama, nomor: foundData.nomor });
    setUpdate({ id: id, status: true });
  };

  const handleRemove = (id) => {
    axios.delete(`${URI}/${id}`).catch((err) => alert(err));
    setUpdate(initialUpdata);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5">
        <div className="w-75">
          <ContactForm
            onChange={handleChange}
            onSubmit={handleSubmit}
            value={form}
          />

          <ul className="list-group mt-5">
            {contacts.map((contact, index) => (
              <Contact
                key={index}
                nama={contact.nama}
                nomor={contact.nomor}
                onEdit={() => handleEdit(contact.id)}
                onRemove={() => handleRemove(contact.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
