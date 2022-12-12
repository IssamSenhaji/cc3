
import React from 'react'

function User() {
  return (
    <div className='user' key={item.id}>
            <img src={item.image}  />
            <h1>{item.firstName}</h1>
            <p>{item.lastName}</p>
            <div className="button">
                <button onClick={() => navigate(`/DetailUser/${item.id}`)}>Detail user</button>
                <button onClick={() => navigate(`/ListTodo/${item.id}`)}>list des taches</button>
            </div>
        </div>
  )
}

export default User