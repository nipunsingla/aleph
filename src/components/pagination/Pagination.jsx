import React from 'react'
import {Pagination} from 'react-bootstrap'

export const CustomPagination = ({postsPerPage, totalPosts, currPage, paginate}) => {
    const numbers = []

    for(let i=1; i<= Math.ceil(totalPosts/postsPerPage); ++i){
        numbers.push(
            <Pagination.Item key={i} active = {i === currPage} onClick={() => paginate(i)}>
                {i}
            </Pagination.Item>
        );
    }

    return (
        <div className="customPagination">
            <div>
                <Pagination>
                    {numbers}
                </Pagination>
            </div>
        </div>
    )
}
