import { getAllMovies } from "../data/movies";
import MovieCard from "./MovieCard";

export default function MovieList(){
    const moviesData = getAllMovies();
    return (
        <div className="content">
				<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                    {moviesData.map(m=>{
                        return <MovieCard key={m.id}  movie={m} />
                    })}
                    
                    
                </div>
                </div>
    )
}