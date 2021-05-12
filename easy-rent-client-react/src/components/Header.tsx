const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                <div className="container">
                    <a className="navbar-brand" href="/">WebApp</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul className="navbar-nav flex-grow-1">
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="/PropertyTypes">PropertyTypes</a>
                            </li>

                        </ul>

                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className="nav-link text-dark" href="/Identity/Account/Register">Register</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="/Identity/Account/Login">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;

