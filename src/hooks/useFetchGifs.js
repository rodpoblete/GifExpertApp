import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        
    },[])

    return state // {data: [], loading: true};
}