import './style.css'
import { profile } from './components/Perfil/index.js'

const app = document.querySelector('#app')
const center = document.createElement('div')
center.id = 'center'
center.appendChild(profile())
app.appendChild(center)