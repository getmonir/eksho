import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = ({ match }) => {
	const product = products.find((p) => p._id === match.params.id);

	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				প্রোডাক্ট পেইজ
			</Link>
			<div className='row'>
				<div className='col-lg-5 ek-product-card'>
					<div className='ek-product-card__inner'>
						<div className='product-title'>{product.name}</div>
						<div className='product-rating'>
							<Rating value={product.rating} text={`${product.numReviews} রিভিউ`} />
						</div>
						{product.countInStock > 0 ? (
							<>
								<span className='text-success'>{product.countInStock} আইটেম স্টকে আছে</span>
							</>
						) : (
							<span className='text-danger'>স্টক আউট</span>
						)}
						<div className='price'>৳{product.price}</div>
						<div className='d-grid'>
							<button className='cart-btn' type='button' disabled={product.countInStock === 0}>
								কার্টে যোগ করুন
							</button>
						</div>
					</div>
				</div>
				<div className='col-lg-7 ek-product-details d-contents d-block--lg ek-prodcut-gallery'>
					<div className='product-img'>
						<div className='single-product-inner'>
							<img src={product.image} alt='' />
						</div>
					</div>
					<div className='product-description'>
						<h4>প্রোডাক্টের বিস্তারিত</h4>
						{product.description}
					</div>
					<div className='product-reviews mb-40 mt-30'>
						<h4>কাস্টমার রিভিউ</h4>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductScreen;
