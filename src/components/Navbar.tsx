import { Link } from "react-router";

export default function Navbar()
{
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/quem-somos">Quem Somos</Link></li>
                    <li><Link to="/registrar">Cadastro</Link></li>
                </ul>
            </nav>
        </>
    )
}