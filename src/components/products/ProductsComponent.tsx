import React, {useEffect, useState} from 'react';
import {IProduct} from "../../models/IProduct";
import ProductComponent from "../product/ProductComponent";
import './products-component.css';

const ProductsComponent = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(value => {
                setProducts(value?.products)
            });
    }, [])

    return (
        <div className="wrapper">
            {
                products.map((product:IProduct) => {
                        return (
                            <ProductComponent
                                key={product.id}
                                product={product}
                            />
                        )
                    }
                )
            }
            
        </div>
    );
};

export default ProductsComponent;