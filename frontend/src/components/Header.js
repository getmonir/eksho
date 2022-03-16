import React from 'react';
import { Link } from 'react-router-dom';
import { BsBagCheck, BsPersonCircle } from 'react-icons/bs';

const Header = () => {
	return (
		<header>
			<div className='ek-navbar'>
				<div className='ek-navbar__logo'>
					<Link to='/'>একশো</Link>
				</div>
				<div className='ek-navbar__menu'>
					<ul>
						<li>
							<Link to='/offer'>
								<BsBagCheck className='mr-8' />
								কার্ট
							</Link>
						</li>
						<li>
							<Link to='/offer'>
								<BsPersonCircle className='mr-8' />
								লগইন
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
