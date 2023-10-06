import { Link } from "react-router-dom";

export default function TheMain(){

    return(
        <div>
            <Link to="/singer">
            <button style={{marginTop: '20px'}}> 
                Click Me To Proceed!
            </button>
            </Link>
        </div>
    );
}