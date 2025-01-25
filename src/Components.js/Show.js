import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Show = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    handleGet();
  }, []);

  const handleGet = () => {
    axios
      .get("http://localhost:3001")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/${id}`)
      .then((res) => {
        console.log(res.data.message);
        handleGet(); // Refresh data after deletion
      })
      .catch((err) => console.log(err));
  };

  const Edit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {/* <th>S.No</th> */}
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Resume</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              {/* <td>{item._id}</td> */}
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>{item.phone}</td>
              <td>
                {item.resume ? (
                  <a
                    href={`http://localhost:3001/${item.resume}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View PDF
                  </a>
                ) : (
                  "No Resume"
                )}
              </td>
              <td>
                <button onClick={() => Edit(item._id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Show;
