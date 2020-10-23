import React from 'react'
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <nav class="nav bg-navy-blue row flex flex-center">
            <ul class="flex align-center">
                <li class="space-between-medium"><NavLink to ="/" exact className="white">HOME</NavLink></li>
                <li class="space-between-medium"><NavLink to="/SoftwareDeveloper" activeClassName="active" className="white">DEVELOPER</NavLink></li>
                <li class="space-between-medium"><NavLink to="/ProductDesign" activeClassName="active" className="white">DESIGN</NavLink></li>
                <li class="space-between-medium"><NavLink to="/ApplyKnowledge" activeClassName="active" className="white">APPLY</NavLink></li>
                <li class="space-between-medium"><NavLink to="/Journal" activeClassName="active" className="white">JOURNAL</NavLink></li>
                <li class="space-between-medium"><NavLink to="/Faq" activeClassName="active" className="white">FAQ</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;