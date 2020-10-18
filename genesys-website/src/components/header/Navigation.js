import React from 'react'
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <nav class="nav bg-navy-blue row flex flex-center">
            <ul class="flex align-center">
                <li class="space-between-medium active"><Link to ="/">HOME</Link></li>
                <li class="space-between-medium"><Link to="/SoftwareDeveloper">DEVELOPER</Link></li>
                <li class="space-between-medium"><Link to="/ProductDesign">DESIGN</Link></li>
                <li class="space-between-medium"><Link to="/ApplyKnowledge">APPLY</Link></li>
                <li class="space-between-medium"><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;