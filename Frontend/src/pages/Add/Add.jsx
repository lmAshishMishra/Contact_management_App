import React, { useState, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Add.css';

const Add = () => {
    const { url, fetchList } = useContext(StoreContext);
    const [data, setData] = useState({ name: "", email: "", phone: "", category: "General", message: "" });
    const [errors, setErrors] = useState({});

    const validate = (name, value) => {
        let errorMsg = "";
        if (name === "name" && value.length < 3) errorMsg = "Minimum 3 characters required.";
        if (name === "email" && !/\S+@\S+\.\S+/.test(value)) errorMsg = "Enter a valid email.";
        if (name === "phone" && !/^\d{10}$/.test(value)) errorMsg = "Must be 10 digits.";
        setErrors(prev => ({ ...prev, [name]: errorMsg }));
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prev => ({ ...prev, [name]: value }));
        validate(name, value);
    };

    const isFormValid = data.name.length >= 3 && 
                        /^\d{10}$/.test(data.phone) && 
                        /\S+@\S+\.\S+/.test(data.email);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${url}/api/contact/add`, data);
        if (response.data.success) {
            toast.success("Added Successfully!");
            setData({ name: "", email: "", phone: "", category: "General", message: "" });
            setErrors({});
            fetchList(); // REFRESHES LIST AUTOMATICALLY
        }
    };

    return (
        <div className='add-card'>
            <h2> Add New Contact</h2>
            <form onSubmit={onSubmitHandler} className='add-form'>
                <div className="input-box">
                    <label>Name</label>
                    <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Full Name" />
                    {errors.name && <span className='error'>{errors.name}</span>}
                </div>
                
                <div className="input-box">
                    <label>Email</label>
                    <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="example@mail.com" />
                    {errors.email && <span className='error'>{errors.email}</span>}
                </div>

                <div className="input-box">
                    <label>Phone</label>
                    <input name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder="10 Digits" />
                    {errors.phone && <span className='error'>{errors.phone}</span>}
                </div>

                <div className="input-box">
                    <label>Message (Optional)</label>
                    <textarea name="message" onChange={onChangeHandler} value={data.message} placeholder="How can we help?" />
                </div>

                <button type="submit" disabled={!isFormValid} className={isFormValid ? "submit-btn active" : "submit-btn disabled"}>
                    SAVE CONTACT
                </button>
            </form>
        </div>
    );
};

export default Add;
