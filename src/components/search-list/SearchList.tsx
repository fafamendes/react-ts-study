import React, { useRef, useCallback } from 'react';

import { ListItem } from "../index";

import { useUrlListContext } from '../../context/UrlListContext';

export const SearchList = () => {

  const { addUrl, removeUrl, urlList, removeAll } = useUrlListContext();

  const inputEl = useRef<HTMLInputElement | null>(null);

  const drawListItem = useCallback(() => {
    let listItemElements: React.ReactElement[] = [];
    urlList.map((url, index) => listItemElements.push(<ListItem url={url} removeUrl={removeUrl} index={index} key={index} />))
    return listItemElements;
  }, [removeUrl, urlList]);


  return (
    <>
      <div>
        <input ref={inputEl} type="text" placeholder="Digite uma url" />
        <button onClick={() => {
          if (inputEl.current) { 
            addUrl(inputEl.current.value) 
            inputEl.current.value="";
          }
        }
        }>Adicionar</button>
        <button onClick={removeAll}>Apagar tudo</button>
      </div>
      <div>
        {drawListItem()}
      </div>
    </>
  );
}