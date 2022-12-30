import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../Context/ProductProvider';


const Home = () => {
    const { state: { products, loading, error } } = useProducts();

    let content;

    if (loading) {
        content = <p>Loading...</p>
    }

    if (error) {
        content = <p>Something went wrong</p>
    }

    if (!loading && !error && products.length === 0) {
        content = <p>Noting to show, list is empty</p>
    }

    if (!loading && !error && products.length) {
        content = products.map(product => <ProductCard
            key={product.model}
            product={product}
        />)
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-2 my-10'>
            {content}
        </div>
    );
};

export default Home;