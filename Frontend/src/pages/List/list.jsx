import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import './List.css';

const List = () => {
    const { url, contactList, fetchList } = useContext(StoreContext);
    const [search, setSearch] = useState("");

    const removeContact = async (id) => {
        const response = await axios.post(`${url}/api/contact/remove`, { id });
        if (response.data.success) {
            toast.success("Contact Removed");
            await fetchList(); // Instantly refresh the table
        }
    };

    return (
        <div className='list-page'>
            <div className='list-header'>
                <h2>All Contacts</h2>
                <input type="text" placeholder="Search contacts..." onChange={(e) => setSearch(e.target.value)} />
            </div>

            <div className='list-table'>
                <div className="list-table-format title">
                    <b>Name</b><b>Email</b><b>Phone</b><b>Category</b><b>Action</b>
                </div>

                {contactList.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map((item, index) => (
                    <div key={index} className="list-table-format">
                        <p>{item.name}</p>
                        <p>{item.email}</p>
                        <p>{item.phone}</p>
                        <p>{item.category}</p>
                        <p onClick={() => removeContact(item._id)} className='cursor delete'>X</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;