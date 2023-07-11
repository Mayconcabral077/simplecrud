import {Routes, Route } from "react-router-dom";
import { Home } from "../home/Home";
import {UserCrud} from "../user/UserCrud"

export function Rotas() {
    return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserCrud />} />
        <Route path="*" element={<Home />} />
    </Routes>
    )
}
   

  

 