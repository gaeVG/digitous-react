import React from "react"
import { Card, Col } from "react-bootstrap"

const Movie = movie =>

    <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${movie.data.poster_path}`} />
            <Card.Body>
                <Card.Title>{movie.data.original_title}</Card.Title>
                <Card.Text>
                    {movie.data.overview}
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>

export default Movie