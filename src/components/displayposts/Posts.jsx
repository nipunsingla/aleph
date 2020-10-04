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
        {posts.map((post) =>{
            return(
            <QuestionCard 
                    content = {post.content}
                    title = {post.title}
                    creator= {post.creator} 
                    time={post.createdAt} 
                    imageUrl={post.imageUrl}  
                />
            )
        })}
        </div>
    )
}

