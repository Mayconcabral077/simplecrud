import './Logo.css'
import Logos from '../../assets/Logos.png'
import { Link } from 'react-router-dom'

export function Logo () {
    return (
        <aside className='logo'>
            <Link to="/" className="logo">
                <img src={Logos} alt="logo" />
            </Link>
        </aside>
    )
} 
