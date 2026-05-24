import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXEL_KEY = import.meta.env.VITE_PEXLES_KEY


export async function fetchPhotos (query,page=1, per_page=20){
   const res= await axios.get('https://api.unsplash.com/search/photos',{
    params:{query,page,per_page},
    query: "nature",  
    headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
   })
  
   return res.data
   
}


export async function fetchVideos(query,per_page=15){
const res = await axios.get('https://api.pexels.com/videos/search',{
   params:{query,per_page},
   headers:{Authorization:`Client-ID ${PEXEL_KEY}`}
})

return res.data

}

