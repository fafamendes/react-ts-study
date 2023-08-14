
interface IListItemProps {
  url: string,
  index: number
  removeUrl: (index: number) => void
}

export const ListItem: React.FC<IListItemProps> = ({ url, index, removeUrl }) => {

  return (
    <li>
      <span>{url}</span>
      <button onClick={() => removeUrl(index)}>Apagar {index}</button>
    </li>
  );
}