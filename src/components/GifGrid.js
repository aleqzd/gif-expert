import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    /* const [images, setImages] = useState([]);
    */
    const { data, loading } = useFetchGifs(category);

    /*
     useEffect(() => {
         getGifs(category)
             .then( setImages)
     }, [category])*/
    // console.log(gifs);


    return (
        <div>
            <h3 className="animate__animated animate__flash">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">

                {
                    data.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))

                }

            </div>

        </div>
    )
}
