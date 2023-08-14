import { createContext, useState, useCallback, useContext } from 'react';

interface IUrlListContext {
  urlList: string[],
  addUrl: (url: string) => void,
  removeUrl: (index: number) => void,
  removeAll: () => void,
}

interface IUrlListProviderProps {
  children: React.ReactNode
}

const UrlListContext = createContext({} as IUrlListContext);

export const useUrlListContext = () => useContext(UrlListContext);

export const UrlListProvider: React.FC<IUrlListProviderProps> = ({ children }) => {

  const [urlList, setUrlList] = useState<string[]>([]);

  const addUrl = useCallback((url: string) => {
    setUrlList(old => [...old, url]);
  }, [])

  const removeUrl = useCallback((index: number) => {
    let old = urlList;
    old.splice(index, 1);
    setUrlList([...old]);
  }, [urlList]);

  const removeAll = useCallback(() => setUrlList([]), []);

  return (
    <UrlListContext.Provider value={{ urlList, addUrl, removeUrl, removeAll }}>
      {children}
    </UrlListContext.Provider>
  );
}