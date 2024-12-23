"use client"

export default function DeleteUser(props){
 
    const deleteRecored = async ()=>{
        let response = await fetch("http://localhost:3000/api/users/"+props.id,{
        method:"delete"});
        response = await response.json();
        if(response.success){
            alert("User Deleted")
        }
   
    }
        return <>
            <button onClick={deleteRecored}>DELETE</button>
        </>
}