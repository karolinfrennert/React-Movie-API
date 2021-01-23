import {useState, useEffect} from 'react'
import {Movie} from './Movie'
import {Filter} from '../Filter'

const movies = [
{
    name: 'NinjaTurtles'

},
{
    name: 'Pokemon'

},
{
    name: 'Titanic'
}
]

export function MoviesList(){

    const [filter, setFilter] = useState("")
    
    useEffect( () => {

    }, [filter])

    

    return(
        <div>            
            <Filter filter={filter} setFilter={setFilter}/>
            <ul>
                { movies.filter( (movie) => movie.name.toLowerCase().includes(filter.toLowerCase())
                ).map( (movie) => (
                    <Movie key={movie.name} movie={movie}/>
                )                  
                                          
               )}
                
            </ul>
        </div>
    )
}