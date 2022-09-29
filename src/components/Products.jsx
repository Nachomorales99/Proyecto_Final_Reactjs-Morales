import React from 'react';
import CardProducts from './Products_components/CardProducts';

const Products = () => {
    const productList = ["1", "Remera Negra", "Remera Básica 100% Algodón", "Jersey 24/1","Oversize",  "https://res.cloudinary.com/nacho-morales/image/upload/v1663897441/multimedia/Remera_Negra_p8lrhv.jpg"];
    return (
        <>
            <div className="productContainer card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <CardProducts products = {productList}/>
                </div>
            </div>
        </>
    );
}

export default Products;