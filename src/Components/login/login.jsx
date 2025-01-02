import React, {useState} from "react";
import './login.css'
import {useNavigate} from "react-router-dom";

function Login() {
    document.title = "Login"
    const navigate = useNavigate()
    const [people, setPeople] = useState([
        {
            email: "admin123@gmail.com",
            password: "admin123",
            name: "Admin"
        }
    ]);
    const date = new Date();

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")

    const seePassword = () => {
        const password = document.getElementById("inputPassword");
        const emoji = document.getElementById("seePassword")
        if (password.type === "password") {
            password.type = "text"
            emoji.innerHTML = "<i class=\"bi bi-eye\"></i>"
        } else {
            password.type = "password"
            emoji.innerHTML = "<i class=\"bi bi-eye-slash\"></i>"
        }
    }

    const verifyContent = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        // Vérifie si un utilisateur correspondant existe
        const user = people.find(person => person.email === mail && person.password === password);

        if (!user) {
            alert("L'adresse email ou le mot de passe est incorrect");
        } else {
            navigate('/pointage')
            document.title = "Pointage";
        }
    };


    return (
        <>
            <div className="loginContainer">
                <div className="headLogin">
                    <h1>Connexion:</h1>
                    <p>{date.toLocaleDateString()}</p>
                </div>
                <form onSubmit={verifyContent}>
                    <label htmlFor="inputName">Votre adresse email: <span className="mandatory"> *</span></label>
                    <input type="email" className="inputNameLogin" id="inputName" name="email" value={mail}
                           onChange={(e) => setMail(e.target.value)} required/>

                    <div className="passwordDiv">
                        <div className="passwordInputLabel">
                            <label htmlFor="inputPassword">Votre mot de passe: <span
                                className="mandatory"> *</span></label>
                        </div>
                        <div className="passwordInputEmoji">
                            <input type="password" id="inputPassword" className="inputPassword" value={password}
                                   onChange={(e) => setPassword(e.target.value)} required/>
                            <p className="emoji" id="seePassword" onClick={seePassword}><i
                                className="bi bi-eye-slash"></i></p>
                        </div>

                    </div>
                    <button type="submit" className="submitButton" id="submitButton">Se connecter</button>
                </form>
            </div>
        </>
    )
}

export default Login