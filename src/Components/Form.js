import React, {useState} from "react";

const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfpassword] = useState("");
    const [submitted, setSubmit] = useState(false);
    const [valFirst, setValFirst] = useState("");
    const [valLast, setValLast] = useState("");
    const [valEmail, setValEmail] = useState("");
    const [valPassword, setValPassword] = useState("");
    const [valConf, setValConf] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {
            firstname, lastname, email, password
        };
        console.log(newUser);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfpassword("");
        setSubmit(true);
    }

    const firstName = (e) => {
        e.preventDefault();
        setFirstname(e.target.value);
        setValFirst(e.target.value);
        if (e.target.value.length < 2){
            setValFirst("First Name must be at least 2 characters!");
        }
        else {
            setValFirst("");
        }
    }

    const lastName = (e) => {
        e.preventDefault();
        setLastname(e.target.value);
        setValLast(e.target.value);
        if(e.target.value.length < 2){
            setValLast("Last Name must be at least 2 characters!");
        }
        else {
            setValLast("");
        }
    }

    const emailz = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        setValEmail(e.target.value);
        if(e.target.value.length < 5){
            setValEmail("Email must be at least 5 characters!");
        }
        else {
            setValEmail("")
        }
    } 

    const passwordz = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
        setValPassword(e.target.value);
        if(e.target.value.length < 8){
            setValPassword("The passwords must match and be at least 8 characters!");
        }
        else {
            setValPassword("")
        }
    }

    const confirm = (e) => {
        e.preventDefault();
        setConfpassword(e.target.value);
        setValConf(e.target.value);
        if(e.target.value.length < 8){
            setValConf("The passwords must match and be at least 8 characters!");
        }
        else {
            setValConf("")
        }
    }

    return (
        <div>
            {
                submitted ? <h4>User Created, Thank You!!!</h4> :
                <div>
                <form onSubmit={createUser}>
                    <div>
                        <label>First Name:</label>
                        <input type="text" onChange={firstName} value={firstname} ></input>
                        {
                            valFirst ?
                            <p style={{color: "red"}}>{valFirst}</p> :
                            ""
                        }
                    </div>
                    <br></br>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" onChange={lastName} value={lastname}></input>
                        {
                            valLast ?
                            <p style={{color: "red"}}>{valLast}</p> :
                            ""
                        }
                    </div>
                    <br></br>
                    <div>
                        <label>Email:</label>
                        <input type="email" onChange={emailz} value={email}></input>
                        {
                            valEmail ?
                            <p style={{color: "red"}}>{valEmail}</p> :
                            ""
                        }
                    </div>
                    <br></br>
                    <div>
                        <label>Password:</label>
                        <input type="password" onChange={passwordz} value={password}></input>
                        {
                            valPassword ?
                            <p style={{color: "red"}}>{valPassword}</p> :
                            ""
                        }
                    </div>
                    <br></br>
                    <div>
                        <label>Confirm Password:</label>
                        <input type="password" onChange={confirm} value={confpassword}></input>
                        {
                            valConf ?
                            <p style={{color: "red"}}>{valConf}</p> :
                            ""
                        }
                    </div>
                    <input type="submit" value="Create User"></input>
                    <br></br>
                    <h4>First Name: {firstname}</h4>
                    <h4>Last Name: {lastname}</h4>
                    <h4>Email: {email}</h4>
                    <h4>Password: {password}</h4>
                    <h4>Confirm Password: {confpassword}</h4>
                </form>
            </div>
            }
        </div>
        
    )
}


export default Form;