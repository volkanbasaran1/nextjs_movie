import Movies from '@/components/Movies';
import React from 'react'

const Page = async ({ params }) => {
    const keyword = params.keyword;



    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=20f94661fdb8e3b259bbad715d329417`);
    const data = res.json();
    
    return (
        <div>
            {
                !data?.results ? 
                    <div> Aranılan şey bulunamadı!</div>:
                
<div className='flex items-center flex-wrap gap-3'>  {
        
        data?.results?.map((dt, i) => (
            <Movies key={i} dt={dt} />
        ))
} </div>
               
            }
        </div>
    )
}

export default Page