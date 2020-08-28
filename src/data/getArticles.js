import { useState, useEffect } from 'react';
import Axios from 'axios';

const GetArticles = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      await Axios.get('https://dev.to/api/articles').then((res) =>
        setData(res.data)
      );
    };
    fetchData();
  }, []);
  return { data };
};

export default GetArticles;
