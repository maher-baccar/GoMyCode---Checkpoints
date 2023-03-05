import axios from 'axios';
import React, { useEffect, useState } from 'react'


function UserList() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        try {
            axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{setUsers(res.data)});

        } catch (error) {
            console.log(error);
        }
    }, [])
    console.log(users);
  return (
    <div>
        {users?(
            users.map((el)=>(
                <div>
                    <h1>{el.name}</h1>
                </div>
            ))
        ):(
            <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921'/>
        )}
    </div>
  );
}

export default UserList