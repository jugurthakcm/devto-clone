import { useState, useEffect } from 'react';
import Axios from 'axios';
import { usePage } from './PageProvider';
import { useSearch } from '../search/SearchProvider';

export const totalOfArticles = 1000; //Provided by the API
export const articlesPerPage = 30; //Default number of articles per page by the API

const GetArticles = () => {
  const [{ page }] = usePage();
  const [data, setData] = useState(null);
  const [{ search }] = useSearch();

  useEffect(() => {
    const fetchData = async () => {
      await Axios.get(
        `https://dev.to/api/articles?tag=${search}&page=${page}`
      ).then((res) => setData(res.data));
    };
    fetchData();
  }, [page, search]);

  return { data };
};

export default GetArticles;
