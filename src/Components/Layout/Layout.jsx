import { Link } from "@reach/router";
import './layout.css';

function Layout( {children} ){
    const path = window.location.pathname;
    return(
        <>
            <header>
                <ul className="menu">
                    <li ><Link to="/" className={path === '/' ? 'menu-active': null}> Filter </Link></li>
                    <li><Link to="/cart" className={path === '/cart' && 'menu-active'}> Cart </Link></li>
                </ul>
            </header>
            <main>
               { children }
            </main>
        </>
    )
}

export default Layout;