import React, { useState } from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { ImageT } from '../../DataInterface/productInterface'

const images:ImageT[] = [
  {url:'/smart-phone-1.jpg', alt:'android smart phone'},
  {url:'/smart-phone-2.jpg', alt:'apple smart phone'},
  {url:'/tablet-1.jpg', alt:' tablet '}
]
const Header = () => {
  const [manipulator,setManipulator] = useState<number>(0)
  const [isDisabled , setIsDisabled] = useState<boolean>(false)

  const prevIndex =() =>{
    if(manipulator !== 0){
      setManipulator(manipulator - 1)
      setIsDisabled(false)
    }
    else if(manipulator <0){
      setIsDisabled(true)
    }
  }
  const nextIndex = () =>{
    if(manipulator !== images.length-1){
      setManipulator(manipulator + 1)
      setIsDisabled(false)
    }
    else if(manipulator > images.length-1){
      setIsDisabled(true)
    }
  }
  const selectSlide =(index:number) =>{
    setManipulator(index)
  }
  return (
    <div className='container relative mx-auto mt-1'>
      <ArrowCircleLeftIcon  onClick ={prevIndex} className='hidden group-hover:block absolute cursor-pointer top-[50%] text-orange-600 left-5 -translate-x-0 translate-y-[-50%]'/>
      <img key={manipulator} className='w-full h-96 rounded-2xl' src={images[manipulator].url} alt={images[manipulator].alt} />
      <ArrowCircleRightIcon onClick = {nextIndex} className='hidden group-hover:block absolute cursor-pointer top-[50%] text-orange-600 right-5 -translate-x-0 translate-y-[-50%]'/>
      <div className='flex justify-center top-4'>
          {
            images.map((image, index) => {
             return <RadioButtonUncheckedIcon className='text-orange-600 cursor-pointer' key={index} onClick={()=>selectSlide(index)} />
            })
          }
      </div>
    </div>
  )
}

export default Header