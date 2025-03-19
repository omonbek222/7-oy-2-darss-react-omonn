import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const ProfileDetail = () => {
  const { id } = useParams(); // URL parametridan ID olish
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate(); // Sahifa navigatsiyasi uchun

  useEffect(() => {
    const token = localStorage.getItem("token");

    async function getProfileDetail() {
      const response = await axios.get(
        `https://nt-devconnector.onrender.com/api/profile/${id}`,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      setProfile(response.data);
    }

    getProfileDetail();
  }, [id]);

  return (
    <div>
      {profile ? (
        <div className="mt-5 p-4 border-2">
          <h2>Profil Ma'lumotlari:</h2>
          <h3>Bio: {profile.bio}</h3>
          <p>Company: {profile.company}</p>
          <p>Github Username: {profile.githubusername}</p>
          <p>Location: {profile.location}</p>
          <p>Skills: {profile.skills}</p>
          <p>Status: {profile.status}</p>
          <button
            onClick={() => navigate("/")} // Asosiy sahifaga qaytish
            className="mt-4 px-4 py-2 bg-blue-500 text-white"
          >
            Qaytish
          </button>
        </div>
      ) : (
        <p>Ma'lumotlar yuklanmoqda...</p>
      )}
    </div>
  );
};
