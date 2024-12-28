import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p align = 'justify'>At Sadiastic, we bring you a one-stop solution for all your clothing needs, catering to women, men, and kids. Our E-Clothing Store is designed to provide top-quality apparel that blends style, comfort, and durability, ensuring you never have to compromise on what matters most to you. From casual wear to formal attire, we offer a diverse collection that suits every occasion and season.</p>
              <p align = 'justify'>Our journey began with a passion for making premium fashion accessible to everyone. We strive to create a seamless shopping experience through our user-friendly platform, curated collections, and unparalleled customer service. With Sadiastic, you can shop with confidence, knowing that every product is crafted with care and quality at its core.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p align = 'justify'>At Sadiastic, our mission is to revolutionize the way people shop for clothing. We aim to connect fashion enthusiasts with premium products through an efficient, innovative, and customer-centric platform. By combining the best of technology and fashion, we aspire to inspire confidence and self-expression in every individual.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
