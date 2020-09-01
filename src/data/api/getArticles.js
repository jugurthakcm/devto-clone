import { useState, useEffect } from 'react';
import Axios from 'axios';
import { usePage } from './PageProvider';

export const totalOfArticles = 1000; //Provided by the API
export const articlesPerPage = 30; //Default number of articles per page by the API

const GetArticles = () => {
  const [{ page }] = usePage();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await Axios.get('https://dev.to/api/articles?page=' + page).then((res) =>
        setData(res.data)
      );
    };
    fetchData();
  }, [page]);

  return { data };
};

export default GetArticles;
