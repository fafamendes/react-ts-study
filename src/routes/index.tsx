import { Routes, Route } from 'react-router-dom';
import { Home, Error } from '../pages';

export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
