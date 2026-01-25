import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const TabularService = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/get-services")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/delete-service?id=${id}`)
      .then((res) => {
        console.log(res.data);
        const filteredData = data.filter(d=> d._id !== id)
        setData(filteredData)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Contact Information</th>
              <th>Available Slots</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((service) => (
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={service?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{service?.providerName}</div>
                      <div className="text-sm opacity-50">
                        {service?.serviceName}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {service?.providerEmail}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {service?.category}
                  </span>
                </td>
                <td>{service?.slotsAvailable}</td>
                <td>{service?.price}</td>
                <th>
                  <Link to={`/update-service/${service?._id}`}>
                    <button className="btn btn-ghost btn-sm">Update</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(service?._id)}
                    className="btn btn-ghost btn-sm"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabularService;
