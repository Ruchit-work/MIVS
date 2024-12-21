"use client"
import { useRouter } from "next/navigation";

export default function DeleteUser(props){
   const router = useRouter();
    const deleteRecored = async ()=>{
        let response = await fetch("http://localhost:3000/api/users/"+props.id,{
        method:"delete"});
        response = await response.json();
        if(response.success){
            alert("User Deleted")
        }
        router.refresh
    }
        return <>
            <button onClick={deleteRecored}>DELETE</button>
        </>
}