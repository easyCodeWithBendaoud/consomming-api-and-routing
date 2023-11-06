import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Users(){

    const [utilisateurs,setUtilisateur]=useState([])
useEffect(function(){
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(data=>setUtilisateur(data))

},[])
return(<div>
    <h1>users nombres: {utilisateurs.length}</h1>
    <table className="table table-striped" >
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
                <th>liste posts</th>
            </tr>
        </thead>
        <tbody>
            {utilisateurs.map(function(user,index){
                return(
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td><Link to={`/posts/${user.id}`}> liste posts</Link></td>
                    </tr>
                )
            })}
        </tbody>
    </table>
</div>)
}