import { useEffect, useState, useCallback } from 'react';

import { useUrlListContext } from '../../context/UrlListContext';
import { api } from '../../services/api';

import { Vitrine } from '../vitrine/Vitrine';

export interface IResultProductProps {
  url: string,
  title: string,
  description: string,
  price: string,
  original_price: string,
  installment: string,
  score: string,
  img_urls: string[],
}


export const Result = () => {

  const { urlList } = useUrlListContext();
  const [listProducts, setListProducts] = useState<IResultProductProps[]>([])

  useEffect(() => {
    if (urlList.length === 0) return;

    const fetch = async () => {
      let response = await api.post('/scrape', { urls: urlList });

      setListProducts(response.data)
    }

    fetch().catch((err) => { console.log(err) })

  }, [urlList]);

  const createProductView = useCallback(() => {
    let elements: React.ReactElement[] = []
    listProducts.map((product, index) => elements.push(
      <Vitrine key={index} {...product}></Vitrine>
    ));
    return elements;
  }, [listProducts]);

  return (
    <>
      <h3>Resultado</h3>

      <div>
        {createProductView()}
      </div>
    </>
  );
}