import React from 'react'
import Card from '../SubComponents/Card'
import { MdOutlineLocalFlorist } from 'react-icons/md'

const HomeCard = () => {
  return (
    <div className='bg-white p-6 felx flex-col'>
        <div className='flex flex-col items-center justify-center '>
            <h2 className='text-[30px] text-green-700 font-bold '>Built for Sri Lankan Agriculture</h2>
            <p className='text-[17px] '>Designed specifically for our farmers,with features that work in
                rural areas</p>
                <p className='text-[17px] '> and support local languages.
            </p>
        </div>
        <div className='flex flex-col m-4  items-center jsutify-center'>
          <div className='flex gap-4 jsutify-center flex-wrap mt-4'>
            <Card icon={<MdOutlineLocalFlorist/>} title={'Farming Guidance'} 
            body={'Get expert advice, weather updates,and farming tips specific to Sri Lankan conditions.'} />
            <Card icon={<MdOutlineLocalFlorist/>} title={'Farming Guidance'} 
            body={'Get expert advice, weather updates,and farming tips specific to Sri Lankan conditions.'} />
            <Card icon={<MdOutlineLocalFlorist/>} title={'Farming Guidance'} 
            body={'Get expert advice, weather updates,and farming tips specific to Sri Lankan conditions.'} />
          </div>

          <div className='flex gap-4 jsutify-center flex-wrap mt-4'>
            <Card icon={<MdOutlineLocalFlorist/>} title={'Farming Guidance'} 
            body={'Get expert advice, weather updates,and farming tips specific to Sri Lankan conditions.'} />
            <Card icon={<MdOutlineLocalFlorist/>} title={'Farming Guidance'} 
            body={'Get expert advice, weather updates,and farming tips specific to Sri Lankan conditions.'} />
            <Card icon={<MdOutlineLocalFlorist/>} title={'Farming Guidance'} 
            body={'Get expert advice, weather updates,and farming tips specific to Sri Lankan conditions.'} />
          </div>
        </div>
    </div>
  )
}

export default HomeCard