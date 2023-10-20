import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from "../navbar/Nav";


const Listcustomer = () => {


    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        try {
            const response = await axios.get('/api/v1/users/all-clients');
            setClients(response.data);
        } catch (error) {
            console.error('Error fetching clients:', error);
        }
    };

    const handleUpdate = async (id, updatedClient) => {
        try {
            await axios.put(`/api/v1/users/update/${id}`, updatedClient);
            fetchClients();
        } catch (error) {
            console.error('Error updating client:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/v1/users/delete/${id}`);
            fetchClients();
        } catch (error) {
            console.error('Error deleting client:', error);
        }
    };

    return (
      <>
       <Nav/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
            <h1 className="text-center">Clients List</h1>
            <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Client First Name</th>
                                    <th> Client Last Name</th>
                                    <th> Client Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>
                        {client.nom} {client.prenom}
                        <button onClick={() => handleUpdate(client.id, { nom: 'Updated', prenom: 'Client' })}>Update</button>
                        <button onClick={() => handleDelete(client.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            </table>
            </div>
        </div>
        </>
    );
};

export default Listcustomer;


// const Listcustomer = () => {
//     return(
//         <>
        
//          <div className="container">
//   <h2 className="text-center">List of Customers</h2>
//   {/* <button className="btn btn-primary mb-2" id="addCustomer">
//     Add Customer
//   </button> */}
//   <table className="table table-striped table-bordered">
    // <thead>
    //   <tr>
    //     <th>Customer Id</th>
    //     <th>Customer First Name</th>
    //     <th>Customer Last Name</th>
    //     <th>Customer Email</th>
    //     <th>Actions</th>
    //   </tr>
    // </thead>
//     <tbody id="customerTableBody">
//       {/* Customer data will be dynamically added here */}
//     </tbody>
//   </table>
// </div>

//         </>


//     )
// }
// export default Listcustomer;