import Pattern from "../Component/Pattern.jsx";
import Container from "../Component/Container.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {

    return (
        <>
            <div className="w-full h-screen ">
                <Pattern/>
                <Container>
                    <Outlet />
                </Container>
            </div>
        </>
    )
}

export default Layout