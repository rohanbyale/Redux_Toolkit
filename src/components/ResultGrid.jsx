import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos } from '../api/meadiaApi'
import { setQuery, setLoading, setError, setResults } from '../redux/features/searchSlice'
import { store } from '../redux/store'
import { useEffect } from 'react'
import ResultCard from './ResultCard'


const ResultGrid = () => {
    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)



    useEffect(() => {
        if (!query || query.trim() === "") return; // ✅ STOP EMPTY CALL

        const getData = async () => {
            try {
                dispatch(setLoading())
                let data = []

                if (activeTab === "photos") {
                    const response = await fetchPhotos(query);
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url:item.links.html
                    }))
                }

                if (activeTab === "videos") {
                    let response = await fetchVideos(query);
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url:item.url
                    }))

                }
                dispatch(setResults(data))

            } catch (err) {
                dispatch(setError(err.message))
            }
        };

        getData();
    }, [query, activeTab]);

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <div className='flex justify-between flex-wrap gap-5 w-full overflow-auto py-6 px-10'>
            {results.map((item, idx) => {
               return  <div key={idx}> 
               
         <a target='_blank' href="{item.url}"> <ResultCard item={item} /></a>
                </div>


})}
        </div>
    )
}

export default ResultGrid