
import Link from "next/link";
import DeleteUser from "@/lib/DeleteUser"


const getusers = async ()=> {

    try {
    let res = await fetch("http://localhost:3000/api/users",{cache:"no-cache"} );
    const data = await res.json();
    if (data.success) {
      return data.result;
    } else {
      return [];
    }
    } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
export default async function Userlist(){
  
     const users = await getusers();
    console.log(users)
    return <>
    <div className="container m-auto">
      <h1 className="text-center">List of Users</h1>
      <table className="table border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone no</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>
                  <Link href={`userlist/${item._id}`}>Edit</Link>
                </td>
                <td>
                  <DeleteUser id={item._id} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </>
}