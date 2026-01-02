import React, { useState, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import InputItem from '../../components/InputItem/InputItem';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Add.css';



const Add = () => {

    const { url, fetchList } = useContext(StoreContext);
    const [data, setData] = useState({ name: "", email: "", phone: "", category: "General" });


const onChangeHandler = (event) => {
        setData(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };


    // Validation logic
    const isFormValid = data.name.length >= 3 && data.phone.length >= 10 && data.email.includes("@");


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${url}/api/contact/add`, data);
        if (response.data.success) {
            setData({ name: "", email: "", phone: "", category: "General" });
            toast.success("Contact Saved!");
            fetchList(); // Updates the list in background
        }
    };







    return (
        <div className='add-page'>
            <form onSubmit={onSubmitHandler} className='flex-col'>
                <InputItem label="Name" name="name" type="text" placeholder="Full Name" value={data.name} onChange={onChangeHandler} />
                <InputItem label="Email" name="email" type="email" placeholder="Email" value={data.email} onChange={onChangeHandler} />
                <InputItem label="Phone" name="phone" type="text" placeholder="Phone Number" value={data.phone} onChange={onChangeHandler} />
                
                <div className="input-item flex-col">
                    <p>Category</p>
                    <select name="category" onChange={onChangeHandler} value={data.category}>
                        <option value="General">General</option>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                    </select>
                </div>
                
              <button type="submit" disabled={!isFormValid} className={isFormValid ? "active-btn" : "disabled-btn"}>
                    ADD CONTACT
                </button>
            </form>
        </div>
    );
};

export default Add;