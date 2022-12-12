import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

const DetailUser= () => {
  const { id } = useParams();
  const [user, setUsers] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://dummyjson.com/users/${id}`
      );
      return res.data;
    };

    getData().then((user) => setProduit(user));
  }, []);
  return <div>
    {
        user && <table>
            <tr>
                <td colSpan={2}> 
                    <img src={user.images[0]} />
                    <img src={user.images[1]} />
                    <img src={user.images[2]} />
                </td>
            </tr>
            <tr>
                <td>Nom</td>
                <td>{user.firstName}</td>
            </tr>
            <tr>
                <td>prenom</td>
                <td>{user.lastName}</td>
            </tr>
            <tr>
                <td>age</td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>gender</td>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <td>email</td>
                <td>{user.email}</td>
            </tr>
            <tr>
                <td>numero de telephone</td>
                <td>{user.phone}</td>
            </tr>
            <tr>
                <td>pois</td>
                <td>{user.weight}</td>
            </tr>
            <tr>
                <td>pois</td>
                <td>{user.weight}</td>
            </tr>
            <tr>
                <td>hauteur</td>
                <td>{user.height}</td>
            </tr>
            <tr>
                <td>birthDate</td>
                <td>{user.birthDate}</td>
            </tr>
            <tr>
                <td>group</td>
                <td>{user.bloodGroup}</td>
            </tr>
            <tr>
                <td>couleur de oeil</td>
                <td>{user.eyeColor}</td>
            </tr>
            
             
        </table>
    }
    
  </div>;
};

export default DetailsProduit;