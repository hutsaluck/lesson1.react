import React, {FC} from 'react';
import {IProduct} from "../../models/IProduct";
import './product-component.css';

type IProductComponentProps = {
    product: IProduct;
}

const ProductComponent: FC<IProductComponentProps> = ({product}) => {
    const {
        title,
        thumbnail,
        price,
        description,
        category,
    } = product

    return (
        <div className="product">
            <div className="wrap-img">
                <img src={thumbnail} alt="product" />
            </div>
            <div className="content-product">
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
                <div className="info-product">
                    <p className="price">${price}</p>
                    <p className="category">{category}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductComponent;