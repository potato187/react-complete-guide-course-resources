import { createContext, useContext, useReducer } from 'react';
import { CART_ACTION, getCartAction } from './cartAction';

export const cartContext = createContext({
	items: [],
	onAddItemToCart: () => {},
});

export const useCartContext = () => {
	const context = useContext(cartContext);
	return context;
};

const CartContextReducer = (state, { type, payload }) => {
	return getCartAction(type, state, payload);
};

export default function CartContextProvider({ children }) {
	const [shoppingCart, shoppingCartDispatch] = useReducer(CartContextReducer, {
		items: [],
	});

	function handleAddItemToCart(id) {
		shoppingCartDispatch({
			type: CART_ACTION.ADD_ITEM,
			payload: { id },
		});
	}

	function handleUpdateCartItemQuantity(productId, amount) {
		shoppingCartDispatch({
			type: CART_ACTION.UPDATE_ITEM_QUANTITY,
			payload: { productId, amount },
		});
	}

	const value = {
		items: shoppingCart.items,
		onAddItemToCart: handleAddItemToCart,
		onUpdateItemQuantity: handleUpdateCartItemQuantity,
	};

	return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}
