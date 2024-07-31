import { Star } from 'lucide-react'
import image from '../../assets/images/products/headphone.png'
import './styles.css'

export function Purchase() {
  return (
    <article className="container">
      <article className="phone">
        <div className="product-image">
          <div className="gradient"></div>
          <img src={image} alt="Fone de Ouvido" />
        </div>
        <div className="product">
          <h2 className="nameproduct">
            Sony <br /> Bluetooth
          </h2>
          <div className="star">
            <Star color="yellow" fill="yellow" />
            <Star color="yellow" fill="yellow" />
            <Star color="yellow" fill="yellow" />
            <Star color="yellow" fill="yellow" />
            <Star color="yellow" />
          </div>
          <span className="price">R$199,00</span>
          <button className="button">ADD TO CART</button>
        </div>
      </article>
    </article>
  )
}
