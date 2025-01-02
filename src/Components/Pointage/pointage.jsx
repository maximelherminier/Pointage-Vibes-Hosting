import './pointage.css'
import {useEffect, useState} from "react";

function Pointage() {

    const date = new Date();
    const [name, setName] = useState('')
    const [time, setTime] = useState('')

    const [arrivesGones, setArrivesGones] = useState([])

    useEffect(() => {
        const updateClock = () => {
            const date = new Date();
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            setTime(`${hours}:${minutes}:${seconds}`);
        };

        setInterval(updateClock, 1000);
    }, []);

    const checked = () => {
        const checkbox1 = document.getElementById("checkbox1");
        const checkbox2 = document.getElementById("checkbox2");

        if ((checkbox1.checked && checkbox2.checked) || (!checkbox1.checked && !checkbox2.checked) || !name) {
            alert("Cocher une case (pas deux) et rentrez un nom");
        } else {
            if (checkbox1.checked) {
                setArrivesGones(prevArrivesGones => [
                    ...prevArrivesGones,
                    {name: name, arrive: time, gone: null}
                ]);
            }

            if (checkbox2.checked) {
                setArrivesGones(prevArrivesGones => [
                    ...prevArrivesGones,
                    {name: name, arrive: null, gone: time}
                ]);
            }
        }

    }

    const [isVisible, setIsVisible] = useState(false)
    const handleSettings = () => {
        setIsVisible(!isVisible)
        console.log(isVisible)
    }

    const handleThemes = () => {
        const biTheme = document.getElementById("bi-theme");
        biTheme.classList.contains("bi-moon-fill") ?
            biTheme.classList.replace("bi-moon-fill", "bi-brightness-high-fill") :
            biTheme.classList.replace("bi-brightness-high-fill", "bi-moon-fill");
    }

    return (
        <>
            <div className="containerPointage">

                <div className="head">

                    <div className="headLeft">
                        <h1>Pointage</h1>
                        <p>{date.toLocaleDateString()}</p>
                    </div>

                    <div className="settings">
                        <i className="bi bi-person-circle" onClick={handleSettings}></i>

                        {isVisible && <div className="optionContainer">

                            <div className="themes" onClick={handleThemes}>
                                <i className="bi bi-theme bi-brightness-high-fill" id="bi-theme"></i>
                                <p>Thèmes</p>
                            </div>

                            <div className="disconnect">
                                <i className="bi bi-person-x"></i>
                                <p>Se Déconnecter</p>
                            </div>
                        </div>}
                    </div>
                </div>

                <div className="pointageDiv">
                    <input type="text" className="inputName" placeholder="Votre nom ..." value={name}
                           onChange={(e) => setName(e.target.value)}/>
                    <div className="inputDiv">
                        <div className="arrive">
                            <label htmlFor="checkbox1">Arrivé</label>
                            <input type="checkbox" id="checkbox1"/>
                        </div>
                        <div className="partie">
                            <label htmlFor="checkbox2">Partie</label>
                            <input type="checkbox" id="checkbox2"/>
                        </div>
                        <button className="pointerButton" onClick={checked}>Pointer</button>
                    </div>
                    <div className="table-container">
                        <table>
                            <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Arrive</th>
                                <th>Depart</th>
                            </tr>
                            </thead>
                            <tbody>
                            {arrivesGones.map((arriveGone, index) => (
                                <tr key={index}>
                                    <td>{arriveGone.name}</td>
                                    <td>{arriveGone.arrive || " "}</td>
                                    <td>{arriveGone.gone || " "}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Pointage