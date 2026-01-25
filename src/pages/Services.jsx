import axios from "axios";
import React, { useEffect, useState } from "react";
import AllService from "../components/AllService";

const Service = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/get-services")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <AllService data={data}></AllService>
    </div>
  );
};

export default Service;



// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import AllService from "../components/AllService";

// const Service = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3000/get-services")
//       .then((res) => {
//         setData(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div>
//       <AllService data={data}></AllService>
//     </div>
//   );
// };

// export default Service;

