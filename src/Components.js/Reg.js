import axios from "axios";
import React, { useState } from "react";

const Reg = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState(null); // Changed from image to resume
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("password", password);
    if (resume) formData.append("resume", resume); // Add resume if it's not null

    try {
      const res = await axios.post("http://localhost:3001", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]); 
  };

  return (
    <div className="row">
      <div className="col-md-4">
        <form className="form-group" onSubmit={handleSubmit}>
          <div>
            <label className="form-label">Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Address</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Contact</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Qualification</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter Qualification"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label">Resume</label>
            <input
              className="form-control"
              type="file"
              accept=".pdf"
              onChange={handleResumeChange}
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Reg;
