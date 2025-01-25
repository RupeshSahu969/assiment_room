import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [resume, setResume] = useState(null); // For PDF file
  const [existingResume, setExistingResume] = useState(''); // To store the existing resume URL

  const navigate = useNavigate();
  const { id } = useParams(); // Get user ID from URL
console.log(id)
  useEffect(() => {
    // Fetch user data when the component mounts
    axios.get(`http://localhost:3001/${id}`)
      .then((res) => {
        const { name, email, address, phone, password, resume } = res.data;
        setName(name);
        setEmail(email);
        setAddress(address);
        setPhone(phone);
        setPassword(password);
        setExistingResume(resume); // Set the existing resume URL
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('address', address);
    formData.append('phone', phone);
    formData.append('password', password);
    if (resume) formData.append('resume', resume); // Append new resume if provided

    try {
      await axios.put(`http://localhost:3001/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/'); // Redirect after successful edit
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]); // Set the selected file
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Resume (PDF):</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleResumeChange}
          />
          {existingResume && (
            <div>
              <a href={`http://localhost:3001/${existingResume}`} target="_blank" rel="noopener noreferrer">
                View Current Resume
              </a>
            </div>
          )}
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Edit;
