import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import DialogWindow from "./DialogWindow";
import {useNavigate} from "react-router";
import {Dialog} from "@material-ui/core";

const LogInWindow = ({addCustomers, logIn, logInVal}) => {

    const [open, setOpen] = useState(false);

    let redirect = useNavigate();

    const handleToOpen = () => {
        if (logInVal === false)
            setOpen(true);
        else {
            logIn(false)
            redirect("/")
            alert("You have been logged out.");
        }
    };

    const handleToClose = () => {
        setOpen(false);
    };

    return (
        <div style={{
            position: "relative",
            marginBottom: "20px"
        }}>
            <h1 style={{
                margin: "0",
                padding: "40px",
                backgroundColor: "black",
                color: "white",
                cursor: "pointer"
            }} onClick={() => {
                redirect("/");
            }}>E-shop MobileShop</h1>

            <FontAwesomeIcon title={(logInVal === false) ? "Log-in" : "Log-out"} className="logedUser" style={{
                position: "absolute",
                top: "30%",
                right: "50px",
                fontSize: "2rem",
                color: "white",
                cursor: "pointer"
            }} icon={faCircleUser} onClick={handleToOpen}/>
            {(logInVal === true) ? <FontAwesomeIcon className="logedUser" style={{
                position: "absolute",
                top: "30%",
                right: "100px",
                fontSize: "2rem",
                color: "white",
                cursor: "pointer"
            }} icon={faCartShopping} onClick={() => {redirect("/cart")}}/> : ""}
            <DialogWindow open={open} logIn={logIn} isLogged={logInVal} addCustomers={addCustomers} handleClose={handleToClose}/>
        </div>
    );
};

export default LogInWindow;