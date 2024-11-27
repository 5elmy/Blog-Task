import  { useEffect, useState } from 'react'
import { post } from '../Interfaces';
import { BASEURL } from '../Constants/BASEURL';

export default function PostHook() {
    let [posts, setPosts] = useState<post[]>([]);
  let [filteredPosts, setFilteredPosts] = useState<post[]>([]);
  let [query, setQuery] = useState('');
  let [currentPage, setCurrentPage] = useState<number>(1);
  let itemsPerPage = 12;
  let [error, setError] = useState<string | null>(null);
 let fetchPosts = async () => {
    try {
      setError(null);
      let res = await fetch(`${BASEURL}/posts`);  
      let data = await res.json();
      setPosts(data);
      setFilteredPosts(data);
     
    } catch (error: any) {
      console.log(error);
      setError(error.message || 'Something went wrong while fetching posts.');
    }
  };


  useEffect(() => {
    fetchPosts();
  }, []);

 
  useEffect(() => {
    let results = posts.filter((post:post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(results);
  }, [query, posts]);

 
  let handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  
  let paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  
  let totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  return {totalPages , paginatedPosts , handlePageChange  , query , posts , error ,setQuery , currentPage }
}
