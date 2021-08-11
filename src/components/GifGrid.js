import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {loading} = useFetchGifs();


    return (
        <>
            <h3>{category}</h3>

            {loading ? 'Cargando...' : 'Data cargada'}

            {/* <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem 
                            key={img.id}
                            {... img}
                        />
                    ))
                }
            </div> */}
        </>
    )
}