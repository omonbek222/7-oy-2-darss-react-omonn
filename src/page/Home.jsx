import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [home, setProfile] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    async function getProfile() {
      const home = await axios.get(
        `https://nt-devconnector.onrender.com/api/profile`,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      setProfile(home.data);
    }
    getProfile();
  }, []);

  console.log(home);

  return (
    <>
      {home.map((profile) => (
        <div
          key={profile._id}
          className="w-[250px] mx-auto border-4 mt-[20px] pt[10px] pb[10px] text-center cursor-pointer"
        >
          <Link to={`/profile/${profile._id}`}>
            <h1>{profile.bio}</h1>
            <p>{profile.company}</p>
            <p>{profile.githubusername}</p>
            <p>{profile.location}</p>
            <p>{profile.skills}</p>
            <p>{profile.status}</p>
          </Link>
        </div>
      ))}
    </>
  );
};



// import axios from "axios";
// import { useEffect, useState } from "react";



// export const Home = () => {
//   const [home, setProfile] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     async function getProfile() {
//       const home = await axios.get(
//        ` https://nt-devconnector.onrender.com/api/profile`,
//         {
//           headers: {
//             "x-auth-token": token,
//           },
//         }
//       );
//       setProfile(home.data);
//     }
//     getProfile();
//   }, []);

//   console.log(home);

// return(
// <>
// {home.map((home) => {
//     return(
//         <div className="w-[250px] mx-auto border-4 mt-[20px] pt[10px] pb[10px] text-center">
// <h1>{home.bio}</h1>
// <p>{home.company}</p>
// <p>{home.data}</p>
// <p>{home.githubusername}</p>
// <p>{home.location}</p>
// <p>{home.skills}</p>
// <p>{home.status}</p>
//  </div>
//     )
        
    
// })}
// </>


// )

// }