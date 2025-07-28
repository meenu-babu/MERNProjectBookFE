import React from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';



const Footer = () => {
  return (
    <footer className='mb-4'>
      <div className='rounded-tr-3xl rounded-tl-3xl pt-12 xl:pt-20 pb-8 '>
        <div className='flex flex-col justify-center items-center'>
<h3 className='text-3xl font-bold mb-2'>
          Discover books that ignite your imagination
        </h3>
        <p className='text-base text-gray-600 mb-4'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, ducimus iste?
        </p>
        </div>
        

        <hr className='my-8 bg-slate-900/30 h-[2px]' />

        {/* Container */}
        <div className='flex justify-between flex-wrap gap-2 p-10'>
          {/* Column 1: Logo and Newsletter */}
          <div className='max-w-sm'>
           <Link to='/' className='flex items-center'>
          <img
            src='https://png.pngtree.com/png-vector/20221030/ourmid/pngtree-book-logo-template-vector-illustration-isolated-element-bookstore-vector-png-image_39867726.png'
            alt='logo'
            height={60}
            width={60}
            className='hidden sm:block mr-2'
          />
          <h4 className='text-xl font-bold'>Bookkart</h4>
        </Link>

            <p className='text-sm text-gray-600 mb-4'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla recusandae voluptatibus excepturi nostrum cum delectus repellat?
            </p>

            <div className='flex items-center pl-3 h-12 bg-primary w-full max-w-[333px] rounded-full ring-1 ring-slate-500/20 mb-4'>
              <input
                type="email"
                placeholder='Enter your email'
                className=' border-none outline-none flex-grow text-sm pl-2'
              />
              <button className='text-sm font-semibold bg-red-700 text-white px-4 py-1 rounded-full mr-2'>
                Subscribe
              </button>
            </div>
          </div>

          {/*  Links and Info */}
          <div className='flex flex-wrap gap-16'>
            {/* Explore Links */}
            <div className='flex flex-col gap-4'>
              <h4 className='text-lg font-semibold'>Explore</h4>
              <ul className='flex flex-col gap-2 text-sm text-gray-600'>
                <Link to="/" className="hover:text-blue-600 transition duration-300">Home</Link>
                <Link to="/shop" className="hover:text-blue-600 transition duration-300">Books</Link>
                
                <Link to='/contact' className="hover:text-blue-600 transition duration-300">Contact</Link>
              </ul>
            </div>

            {/* Help Links */}
            <div className='flex flex-col gap-4'>
              <h4 className='text-lg font-semibold'>Help</h4>
              <ul className='flex flex-col gap-2 text-sm text-gray-600'>
                <Link to="/faq" className="hover:text-blue-600 transition duration-300">FAQ</Link>
                <Link to="/support" className="hover:text-blue-600 transition duration-300">Customer Support</Link>
                <Link to="/terms" className="hover:text-blue-600 transition duration-300">Terms of Use</Link>
                <Link to="/privacy" className="hover:text-blue-600 transition duration-300">Privacy Policy</Link>
              </ul>
            </div>

            {/* Contact Info */}
            <div className='flex flex-col gap-4'>
              <h4 className='text-lg font-semibold'>Contact</h4>
              <div className='flex flex-col gap-2 text-sm text-gray-600'>
                <div className='flex gap-2'>
                  <p>Phone:</p><p className='font-semibold'>+91 0123456789</p>
                </div>
                <div className='flex gap-2'>
                  <p>Email:</p><p className='font-semibold'>bookkart@gmail.com</p>
                </div>
                <div className='flex gap-2'>
                  <p>Address:</p><p className='font-semibold'>123 Book Street, Cityname</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className='flex flex-col gap-4'>
  <h4 className='text-lg font-semibold'>Follow Us</h4>
  <div className='flex gap-4 text-xl text-gray-700'>
    <Link to="/" className="hover:text-blue-600 transition duration-300" ><FaFacebookF /></Link>
    <Link to="/" className="hover:text-blue-600 transition duration-300"><FaTwitter /></Link>
    <Link to="/" className="hover:text-blue-600 transition duration-300"><FaInstagram /></Link>
    <Link to="/" className="hover:text-blue-600 transition duration-300"><FaYoutube /></Link>
    <Link to="/" className="hover:text-blue-600 transition duration-300"><FaLinkedinIn /></Link>
  </div>
</div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className='text-gray-600/100 bg-sky-200 text-sm font-medium py-2 px-8 rounded flex justify-center'>
        <span>All rights reserved @ 2025 Bookkart</span>
        
      </p>
    </footer>
  );
};

export default Footer;
