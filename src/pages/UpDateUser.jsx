import React from "react";
import { useState, useEffect } from "react";
import { ref, get, update } from "firebase/database";
import { database } from "/src/API/firebase";
import { useParams } from "react-router-dom";
import OurMenu from "../components/OurMenu";

function UpDateUser() {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const { userId } = useParams();

  useEffect(() => {
    const userRef = ref(database, `users/${userId}`);

    get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.val();
        setUser(userData);
        setName(userData.name);
        setEmail(userData.email);
      }
    });
  }, [userId]);
  console.log(userId);

  const handleSave = () => {
    const userRef = ref(database, `users/${userId}`);
    update(userRef, { name: name, email: email })
      .then(() => {
        console.log("Дані оновлено.");
      })
      .catch((error) => {
        console.error("Помилка під час оновлення даних:", error);
      });
  };
  return (
    <div>
      <h2>Edit User</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default UpDateUser;
