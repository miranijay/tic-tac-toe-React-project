import { useState } from "react"


export default function Player({name, symbol}) {

    const [editing, setediting] = useState(false)
    const [Playname, setPlayname] = useState(name)

    function handleEdit() {
        setediting(!editing)
    }

    function handleChange(e) {
        setPlayname(e.target.value)
    }

    let PlayerName = <span className="player-name">{Playname}</span>



    if(editing) {
        PlayerName = <input type="text" required defaultValue={Playname} onChange={handleChange} />
    }

    return(
        <li>
            <span className="player">
                {PlayerName}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleEdit}>{editing ? "Save" : "Edit"}</button>
            </span>
        </li>
    )
}