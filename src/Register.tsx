import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState(""); 

    const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    }

    const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value);
    }

    const onClick = () => {
        console.log(`id: ${id}`);
        console.log(`pw: ${pw}`);
    }

    return(
        <div>
            <p>
                id: 
                <input 
                    value={id}
                    type="text" 
                    id="id" 
                    placeholder="id"
                    onChange={onChangeId}
                />
            </p>
            
            <p>
                pw: 
                <input 
                    value={pw}
                    type="password" 
                    id="pw" 
                    placeholder="pw"
                    onChange={onChangePw}
                />
            </p>

            <button
                onClick={onClick}
            >
                register
            </button>
            <br />

            <Link to='/'>Login</Link>

        </div>
    );
}

export default Register