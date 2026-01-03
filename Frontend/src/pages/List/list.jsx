import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import './List.css';
import { IoIosSearch } from "react-icons/io";
import { MdAutoDelete } from "react-icons/md";
const List = () => {
    const { url, contactList, fetchList } = useContext(StoreContext);
    const [search, setSearch] = useState("");

    const deleteContact = async (id) => {
        const response = await axios.post(`${url}/api/contacttoash/remove`, { id });
        if (response.data.success) {
            toast.error("Contact Deleted");
            fetchList();
        }
    };

    const filteredList = contactList.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='list-card'>
           <div className='list-header'>
    <h3>Contacts ({filteredList.length})</h3>
    
    <div className="search-container">
        <IoIosSearch className="search-icon" />
        <input 
            type="text" 
            placeholder="Search by name..." 
            onChange={(e) => setSearch(e.target.value)} 
            className='search-bar'
        />
    </div>
</div>

            <div className='table-container'>
                <div className='table-header'>
                    <b>Name</b><b>Phone</b><b>Category</b><b>Action</b>
                </div>
                {filteredList.map((item, index) => (
                    <div key={index} className='table-row'>
                        <p>{item.name}</p>
                        <p>{item.phone}</p>
                        <p className='cat-tag'>{item.category}</p>
                        <p onClick={() => deleteContact(item._id)} className='delete-btn'> <MdAutoDelete  size={50} /></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;

