import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <h1>reaaaaaaaaaaaaaaaaa</h1>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/createuser"}>createuser</Link>
                </li>
                <li>
                    <Link to={"/alluser"}>alluser</Link>
                </li>
            </ul>
        </div>
    );
}
export default Navbar;
