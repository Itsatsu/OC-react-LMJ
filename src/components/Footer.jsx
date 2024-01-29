import {useState} from 'react'
import '../styles/Footer.css'


function Footer() {
    const [email, setEmail] = useState('')

    function handleInput(e) {
        setEmail(e.target.value)
    }

    function handleBlur() {
        if (!email.includes('@') && email !== '') {
            return alert("Attention il n'y a pas d'@, ceci n'est pas une adresse valide")
        }
    }

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input type="text"
                   name="email"
                   value={email}
                   onChange={handleInput}
                   onBlur={handleBlur}/>
            <input type="submit" value="Envoyer"/>
        </footer>
    )
}

export default Footer