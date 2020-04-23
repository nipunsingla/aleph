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
        {posts.map(post =>{
            return(
                <QuestionCard 
                    key = {post.id}
                    userId = {post.userId} 
                    id = {post.id}
                    title = {post.title}
                    body = {post.body}    
                />
            )
        })}
        </div>
    )
}
