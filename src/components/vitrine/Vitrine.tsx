import { IResultProductProps } from '..';

export const Vitrine: React.FC<IResultProductProps> = ({ description, img_urls, installment, original_price, price, score, title, url }) => {

  return (
    <>
      <div>{url}</div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{original_price}</div>
      <div>{price} </div>
      <div>{installment}</div>
      <div>{score}</div>
      <div>{img_urls}</div>
      <div>{img_urls} </div>
    </>
  );
}