import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
	return (
		<div className='product'>
			<div className='product__wrap'>
				<Link to={`/product/${product._id}`}>
					<div className='product__wrap--thumbnail'>
						<div className='u-inner'>
							<img src={product.image} alt='' />
						</div>
					</div>
				</Link>
				<div className='product-body'>
					<Link className='product-name' to={`/product/${product._id}`}>
						{product.name}
					</Link>
					<div className='product-rating'>
						<Rating value={product.rating} text={`${product.numReviews} রেটিংস`} />
					</div>
					<div className='product-price'>৳{product.price}</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
