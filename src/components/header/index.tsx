import { ShoppingCart } from 'lucide-react'
import './styles.css'

export function Header() {
  return (
    <header className="header">
      <p>Home</p>
      <p>Sobre</p>
      <p>Com fio</p>
      <p>Wireless</p>
      <p>Promoção</p>
      <ShoppingCart />
    </header>
  )
}
