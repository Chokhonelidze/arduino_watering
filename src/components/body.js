import React from "react";
import { HashRouter, Routes, Route} from "react-router-dom";
import Requirements from "../pages/requirements";
import NavBar from "./navbar";
import Header from "./header";
import Hardware from "../pages/hardware";
import Software from "../pages/software";
import Main from "../pages/main";
const Page = React.createContext(null);

function Body(){
    const [page,setPage] = React.useState([
      { href: "#", name: "Main", active: true },
        { href: "#/requirements", name: "Requrements", active: false },
        { href: "#/hardware/", name: "Hardware Configuration", active: false},
        { href: "#/software/", name: "Software", active: false},
      ])
    return (
    <HashRouter>
        <Page.Provider value={[page,setPage]} >
        <NavBar />
        <Header />
         <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/requirements" exact element={<Requirements />} />
            <Route path="/hardware" exact element={<Hardware />} />
            <Route path="/software" exact element= {<Software />} />
         </Routes>
         <NavBar />
         </Page.Provider>
    </HashRouter>
    )
}
export {Body, Page}