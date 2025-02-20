import React, { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import Footer from './Footer';

const Home = () => {

	const ref = useRef(0);
	const [text, setText] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			if (ref.current < name.length) {
				ref.current++;
				setText(() => text + name[ref.current - 1]);
			}
		}, 500);
		return () => clearInterval(interval);
	}, [text]);

	return (
		<div className='area relative z-0 bg-black w-screen h-screen'>
			<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
				<div className='flex items-center'>
					{/* Profile Picture */}
                <img 
                    src="https://media.licdn.com/dms/image/v2/D5603AQFJkBLoVV73EQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725179933675?e=2147483647&v=beta&t=F3OYz1j0m1tYxz7VpK206my-B8rGcbkMRVVZdT9lMjo" 
                    alt="Aditya Gunda"
                    className="rounded-full w-40 h-40 object-cover border-4 border-white mr-6"
                />

					<div className='pt-4 h-36 backdrop-blur-sm rounded-3xl'>
						<h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>Hi, I'm&nbsp;<span className='text-yellow-200 font-extrabold'>{text}</span></h1>
						<p className='mt-3 text-xl'>Shaping Tomorrow with AI & ML Today</p>
					</div>      
				</div>
			</div>
			<Footer/>
		</div>	
	);
}

export default Home;
