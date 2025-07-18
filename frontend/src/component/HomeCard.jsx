import React from 'react'
import Card from '../SubComponents/Card'
import { FiTrendingUp } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { FiGlobe } from 'react-icons/fi';
import { FiSmartphone } from 'react-icons/fi';
import { FiWifiOff } from 'react-icons/fi';
import { GiPlantSeed } from 'react-icons/gi';



const HomeCard = () => {
  return (
    <div className='bg-green-900 p-6 felx flex-col'>
        <div className='flex flex-col items-center justify-center '>
            <h2 className='text-[30px] text-green-300 font-bold '>Built for Sri Lankan Agriculture</h2>
            <p className='text-[17px] text-green-50 '>Designed specifically for our farmers,with features that work in
                rural areas</p>
                <p className='text-[17px] text-green-50 '> and support local languages.
            </p>
        </div>
        <div className='flex flex-col m-4  items-center jsutify-center'>
          <div className='flex gap-4 jsutify-center flex-wrap mt-4'>
            <Card icon={<FiTrendingUp/>} title={'Real-time Market Prices'} 
            body={'Get live prices for tea,paddy,vegetables,and spices across all major markets in Sri Lanka.'} />
            <Card icon={<FiUser/>} title={'Direct Buyer Connection'} 
            body={'Connect directly with buyers,hotels,and exporters.No middlemen,better profits for farmers.'} />
            <Card icon={<FiGlobe/>} title={'MUlti-language Support'} 
            body={'Available in Sinhala,Tamil,and English.Easy to use for farmers across all commumites'} />
          </div>

         <div className='flex gap-4 justify-center flex-wrap mt-4'>
  <Card
    icon={<FiSmartphone className="text-green-600 w-6 h-6" />}
    title="Mobile-First Design"
    body="Optimized for smartphones with simple, large buttons and clear text for easy use."
  />
  <Card
    icon={<FiWifiOff className="text-green-600 w-6 h-6" />}
    title="Offline Support"
    body="Works even with poor internet connection. Data is cached locally for rural areas."
  />
  <Card
    icon={<GiPlantSeed className="text-green-600 w-6 h-6" />}
    title="Farming Guidance"
    body="Get expert advice, weather updates, and farming tips specific to Sri Lankan conditions."
  />
</div>
        </div>
    </div>
  )
}

export default HomeCard