import React,{useState,useEffect} from 'react';
import {Posts} from './Posts'
import {CustomPagination} from '../../components/pagination/Pagination'
export const DisplayPosts=({data})=>{

    const [questions, setQuestions] = useState(data);
    const [loading, setLoading] = useState(false);
    const [currPage, setCurrPage] = useState(1);
    const [postsPerPage, setPPP] = useState(10);
    const [newQuestion, setQuestion] = useState("");

    useEffect(()=>{
        const fetchQuestions =()=>{
            console.log(data,'nsdnkjsdnkjn')
            setQuestions(data);
            setLoading(false);
        
        }

        fetchQuestions();
    }, []);

    const paginate = (page) =>{
        setCurrPage(page);
    }   

    const firstIndex = (currPage - 1)*postsPerPage, lastIndex = currPage*postsPerPage;
    const currPageQuestions = data.slice(firstIndex, lastIndex);    
  
    return(
    <div>
    <div>

        <Posts posts = {currPageQuestions} loading ={loading}/>
        <CustomPagination 
                        postsPerPage = {postsPerPage} 
                        totalPosts = {questions.length} 
                        currPage ={currPage} 
                        paginate = {paginate}
                    />
                        </div>

          
            </div>
    
    )
}
