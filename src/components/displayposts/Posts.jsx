import React from 'react'
import QuestionCard from './QuestionCard'

export const Posts = ({posts, loading}) => {
    if(loading){
        return(
            <h1>Loading...</h1>
        )
    }
    return (
        <div>
        {posts.map((post,index) =>{
            return(
                <QuestionCard 
                    key = {index+1}
                    userId = {post.userId} 
                    id = {index+1}
                    title = {post.title}
                    body = {post.body}    
                />
            )
        })}
        </div>
    )
}
