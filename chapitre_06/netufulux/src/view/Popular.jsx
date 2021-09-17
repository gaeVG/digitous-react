import React, { useState, useEffect } from "react"
import { Col, Row } from "react-bootstrap"

import Movie from "../component/Movie"
import MoviePagination from "../component/MoviePagination"

const API_KEY = process.env.REACT_APP_API_TMDB


const Popular = () => {

    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    

    useEffect( () => {

        fetch(`https://api.themoviedb.org/3/discover/movie?language=fr-FR&sort_by=popularity.desc&page=${currentPage}&api_key=${API_KEY}`)
            .then(res => res.json())
            .then(res => {

                const popular = res.results.filter(movie => movie.popularity >= 500)

                setMovies(popular);
            })
        console.log(currentPage)
    }, [currentPage])


    return (
        <React.Fragment>
            {
                movies.length > 0
                ?
                    <React.Fragment>

                        <MoviePagination
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />

                                
                        <Row xs={1} sm={2} lg={4}>
                            {
                                movies.map(movie =>

                                    <Movie
                                        key={movie.id}
                                        data={movie}
                                    />
                                )
                            }
                        </Row>
                    </React.Fragment>
                :
                    <React.Fragment>
                        <Row>
                            <Col>
                                Aucun film populaire à cette page...
                            </Col>
                        </Row>
                    </React.Fragment>
            }

            <MoviePagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </React.Fragment> 
    )
}

export default Popular