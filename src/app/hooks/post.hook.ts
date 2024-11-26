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
      const res = await fetch(`${BASEURL}/posts`);  
      const data = await res.json();
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
    const results = posts.filter((post:post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(results);
  }, [query, posts]);

 
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  return {totalPages , paginatedPosts , handlePageChange  , query , posts , error ,setQuery , currentPage }
}
