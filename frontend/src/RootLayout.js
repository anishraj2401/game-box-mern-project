import Header from "../src/components/routing/Header";
import Footer from "../src/components/routing/Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}