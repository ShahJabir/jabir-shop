'use server';
import WooCommerceRestApi from 'woocommerce-rest-ts-api';

const WooCommerce = new WooCommerceRestApi({
  url: `${process.env.WOOCOMMERCE_URL}`,
  consumerKey: `${process.env.WOOCOMMERCE_CONSUMER_KEY}`,
  consumerSecret: `${process.env.WOOCOMMERCE_CONSUMER_SECRET}`,
  version: 'wc/v3',
});

export const getProducts = async () => {
  try {
    const response = await WooCommerce.get('products');
    return response.data;
  } catch (error) {
    return error;
  }
};
