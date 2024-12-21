//"use client"
import Link from "next/link";
import DeleteUser from "@/lib/DeleteUser"
//import { useRouter } from "next/navigation";

const getusers = async ()=> {
 //const router = useRouter();
   
    let data = await fetch("http://localhost:3000/api/users",{cache:"no-cache"} );//
    data = await data.json();
    if(data.success){
        return data.result;  
       //router.refresh();
    }else{
        return {success:false}
    }
}
export default async function Userlist(){
  
     const users = await getusers();
    console.log(users)
    return <>
   
    <div className="container  m-auto">
    <Link href="/contact"><button className="btn btn-primary mt-3">GO Back</button></Link>
    <h1 className="text-center">List OF Users</h1>

    <table class="table border">
  <thead>
    <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone no </th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
    </tr>
  </thead>
  <tbody>
  {users.map((item)=>(
        <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.age}</td>
            <td>{item.phone} </td>
            <td>{item.address}</td>
            <td><Link href={"userlist/"+item._id }  >Edit</Link></td>
            <td><DeleteUser id={item._id}/></td>
        </tr>
    ))} 
   
  </tbody>
</table>
    
    </div>
    </>
}