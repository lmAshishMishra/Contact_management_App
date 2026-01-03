import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = "https://contact-management-ap-backend.onrender.com"; // Your Backend URL
    const [contactList, setContactList] = useState([]);

    // Logic to fetch all contacts from DB
    const fetchList = async () => {
        try {
            const response = await axios.get(`${url}/api/contacttoash/list`);
            if (response.data.success) {
                setContactList(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };




    // Load data whenever the app starts
    useEffect(() => {
        fetchList();
    }, []);

    const contextValue = {
        url,
        contactList,
        fetchList
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
