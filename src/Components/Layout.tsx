import React from 'react';
import {Link, Outlet} from "react-router-dom";
import "bootstrap/"
import Header from "./Header";
const Layout = () => {

    return (
        <div className="container-fluid">
            <Header/>
            <div className="row">
                {/* Left Sidebar */}
                <div className="col-3 bg-light">
                    <nav>
                        <ul>
                            <li>
                                <Link  id="wahlAufruf" data-testid="wahlAufruf" to="/ranking">Wahlübersicht</Link>
                            </li>
                            <li>
                                <Link to="/wahlübersicht">Stimmabgabe</Link>
                            </li>

                        </ul>
                    </nav>
                </div>
                {/* Main Content */}
                <div className="col-7">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Layout;