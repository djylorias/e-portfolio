import { Briefcase, Folder, GearSix, GraduationCap, House } from "@phosphor-icons/react"
import { NavLink } from "react-router"

function Navbar() {
    
    return (
        <div className="navbar">
            <NavLink to={"/"} className={"navlink"}>
                <House size={32} />
                <span className="navlink_title">Home</span>
            </NavLink>
            <NavLink to={"/experience"} className={"navlink"}>
                <Briefcase size={32} />
                <span className="navlink_title">Expériences</span>
            </NavLink>
            <NavLink to={"/studies"} className={"navlink"}>
                <GraduationCap size={32} />
                <span className="navlink_title">Etudes</span>
            </NavLink>
            <NavLink to={"/skills"} className={"navlink"}>
                <GearSix size={32} />
                <span className="navlink_title">Compétences</span>               
            </NavLink>
            <NavLink to={"/projects"} className={"navlink"}>
                <Folder size={32} />
                <span className="navlink_title">Projets</span>          
            </NavLink>
        </div>
    )

}

export default Navbar;