import { DUMMY_PRODUCTS } from '../dummy-products';

const addItemToCart = (state, payload) => {
	const { id } = payload;
	const { items } = state;

	const updatedItems = [...items];
	const existingCartItemIndex = items.findIndex((cartItem) => cartItem.id === id);
	const existingCartItem = items[existingCartItemIndex];

	if (existingCartItem) {
		const updatedItem = {
			...existingCartItem,
			quantity: existingCartItem.quantity + 1,
		};
		updatedItems[existingCartItemIndex] = updatedItem;
	} else {
		const product = DUMMY_PRODUCTS.find((product) => product.id === id);
		updatedItems.push({
			id: id,
			name: product.title,
			price: product.price,
			quantity: 1,
		});
	}

	return {
		...state,
		items: updatedItems,
	};
};

const updateCartItemQuantity = (state, payload) => {
	const { productId, amount } = payload;
	const { items } = state;
	const updatedItems = [...items];
	const updatedItemIndex = updatedItems.findIndex((item) => item.id === productId);

	const updatedItem = {
		...updatedItems[updatedItemIndex],
	};

	updatedItem.quantity += amount;

	if (updatedItem.quantity <= 0) {
		updatedItems.splice(updatedItemIndex, 1);
	} else {
		updatedItems[updatedItemIndex] = updatedItem;
	}

	return {
		...state,
		items: updatedItems,
	};
};

export const CART_ACTION = {
	ADD_ITEM: 'ADD_ITEM',
	UPDATE_ITEM_QUANTITY: 'UPDATE_ITEM_QUANTITY',
};

const cartActionStrategies = {
	ADD_ITEM: addItemToCart,
	UPDATE_ITEM_QUANTITY: updateCartItemQuantity,
};

export const getCartAction = (action, state, payload) => {
	return cartActionStrategies[action] ? cartActionStrategies[action](state, payload) : state;
};
