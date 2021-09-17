import React, { useEffect, useState } from "react"
import { Col, Pagination, Row } from "react-bootstrap"

const MoviePagination = props => {

    const [pagination, setPagination] = useState([])

    useEffect( () => {

        let elements = []

        if (props.currentPage > 1) {

            if (props.currentPage > 3) {

                elements.push(
                    <React.Fragment>
                        <Pagination.First onClick={ () => props.setCurrentPage(1) } />
                    </React.Fragment>
                );
            }

            elements.push(
                <Pagination.Prev onClick={ () => props.setCurrentPage(props.currentPage - 1) } />
            );
        }

        for (let number = 1; number <= 500; number++) {
            console.log(number === props.currentPage)
            if (Math.abs(props.currentPage - number) <= 2) {

                elements.push(

                    <Pagination.Item
                        key={number}
                        active={number === props.currentPage}
                        activeLabel=""
                        onClick={ () => props.setCurrentPage(number) }
                    >
                        {number}
                    </Pagination.Item>
                );
            }
        }

        if (props.currentPage < 500) {

            elements.push(
                <Pagination.Next onClick={ () => props.setCurrentPage(props.currentPage + 1) } />
            );

            if (props.currentPage < 497) {

                elements.push(
                    <Pagination.Last onClick={ () => props.setCurrentPage(500) } />
                );  
            }
        }

        setPagination(elements)
    }, [props.currentPage])

    return (

        <Row>
            <Col>
                <Pagination size="sm">
                    {pagination}
                </Pagination>
            </Col>
        </Row>
    )
}

export default MoviePagination
