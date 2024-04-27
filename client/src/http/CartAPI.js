import { $authHost } from './index';

export const fetchCart = async () => {
    try {
        const response = await $authHost.get('api/cart');
        return response.data;
    } catch (error) {
        throw new Error('Помилка отримання вмісту кошика');
    }
};

// Інші функції для додавання, видалення товарів з кошика можуть бути такими:

export const addToCart = async (productId, quantity) => {
    try {
        const response = await $authHost.post('api/cart/add', { productId, quantity });
        return response.data;
    } catch (error) {
        throw new Error('Помилка додавання товару до кошика');
    }
};

export const removeFromCart = async (productId) => {
    try {
        const response = await $authHost.post('api/cart/remove', { productId });
        return response.data;
    } catch (error) {
        throw new Error('Помилка видалення товару з кошика');
    }
};

// Інші функції для оформлення замовлення, очищення кошика та ін. також можуть бути додані сюди
