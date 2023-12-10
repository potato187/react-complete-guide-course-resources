import { cartContext } from '../store/shoppingCart.context';

export default function Product({ id, image, title, price, description }) {
	return (
		<cartContext.Consumer>
			{({ onAddItemToCart }) => (
				<article className='product'>
					<img src={image} alt={title} />
					<div className='product-content'>
						<div>
							<h3>{title}</h3>
							<p className='product-price'>${price}</p>
							<p>{description}</p>
						</div>
						<p className='product-actions'>
							<button onClick={() => onAddItemToCart(id)}>Add to Cart</button>
						</p>
					</div>
				</article>
			)}
		</cartContext.Consumer>
	);
}
