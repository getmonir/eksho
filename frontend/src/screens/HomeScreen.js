import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => {
	return (
		<>
			<h1>Latest Products</h1>
			<div className='row g-3'>
				{products.map((product) => (
					<div className='col-3'>
						<Product product={product} />
					</div>
				))}
			</div>
		</>
	);
};

export default HomeScreen;
