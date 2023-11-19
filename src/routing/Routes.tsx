import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../ui/layouts/MainLayout';
import { URL_ARTICLE, URL_NEWS_TABLE } from './URLs';
import NewsTablePage from '../ui/pages/NewsTablePage';
import ArticlePage from '../ui/pages/ArticlePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        <Route index element={<Navigate to={URL_NEWS_TABLE} />} />
        <Route path={URL_NEWS_TABLE} element={<NewsTablePage />} />
        <Route path={URL_ARTICLE} element={<ArticlePage />} />

        <Route
          path="*"
          element={<div>Page not found, try something else</div>}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
