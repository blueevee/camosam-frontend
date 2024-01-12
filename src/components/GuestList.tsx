import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/GuestList.css"


interface Guest {
  name: string;
}

const GuestList: React.FC = () => {
  const [guest, setGuest] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=5")
      .then((response) => {
        setGuest(response.data.results.map((guest: Guest) => ({
          name: guest.name.first + "  "+ guest.name.last,
        })))
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ul className="guest-list">
        {guest.map((guest: Guest) => (
          <li key={guest.name}>{guest.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GuestList;