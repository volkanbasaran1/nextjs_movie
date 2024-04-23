"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'




const Movies = ({dt}) => {
const router = useRouter();


  return (
    <div onClick={()=>router.push(`/movie/${dt?.id}`)} className='min-w-[470px] relative imgContainer'>
<Image style={{objectFit:'cover'}} width={470} height={700} src={`https://image.tmdb.org/t/p/original/${dt.backdrop_path || dt?.poster_path}`}/>
   <div className='absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity'>
    <div className='text-2xl font-bold'>
{dt?.title}
    </div>
    <div>{dt?.release_date} - {dt?.vote_avarage}</div>
   </div>
    </div>
  )
}

export default Movies