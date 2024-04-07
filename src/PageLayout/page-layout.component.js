import {Outlet} from "react-router-dom";
import NavbarComponent from "../NavBar/navbar.component";

export default function PageLayout()  {
    return (
        <>
            <NavbarComponent/>
            <div className="main-wrapper">
                <main>
                    <Outlet/>
                </main>
            </div>
        </>

    )
}
