import { Link } from 'react-router-dom'
import './Footer.css'


export function Footer () {
 return (
    <footer className="footer">
     <span>
        Desenvolvido com <i className='fa fa-heart text-danger'></i> por <strong><Link target='_blank' to="https://www.linkedin.com/in/maycon-cabral-0a3b15189/">Maycon Cabral</Link></strong>
     </span>
    </footer>
 )
} 
