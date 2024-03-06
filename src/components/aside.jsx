import React from 'react'
import { Link } from 'react-router-dom'

export default function Aside() {
    return (
        <aside className="aside">
            <div className="aside-inner">
                <nav className="aside-nav">
                    <ul>
                        <li>
                            {/* <a href="/" className='active'>Tableau de board</a> */}
                            <Link to="/" className='active'>Tableau de board</Link>
                        </li>
                        <li>
                            {/* <a href="/r">Restaurants</a> */}
                            <Link to="/r">Restaurants</Link>

                        </li>
                        <li>
                            {/* <a href="/ex">Expérience
                            </a> */}
                            <Link to="/ex">Expérience</Link>
                            <span className="">Soon</span>
                        </li>
                        <li>
                            {/* <a href="/pt">Plan de table
                            </a> */}
                            <Link to="/pt">Plan de table</Link>
                            <span className="">Soon</span>
                        </li>
                        <li>
                            {/* <a href="/eq">L'équipe
                            </a> */}
                            <Link to="/eq">L'équipe</Link>
                            <span className="">Soon</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>

    )
}
