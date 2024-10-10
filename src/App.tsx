import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home/home-page';
import MainLayout from './layouts/main-layout';
import NotFoundPage from './pages/not-found-page';
import { AuthProvider } from './hooks/use-auth';
import { LoginPage } from './pages/login/login-page';
import { ProtectedRoute } from './pages/protected-pages';
import { CalendarPage } from './pages/calendar/calendar-page';
import { ToReviewPage } from './pages/to-review/to-review-page';
import { ClassDetailPage } from './pages/class-detail/class-detail-page';
import { ArchivedClassesPage } from './pages/archived-classes/archived-classes-page';
import { SettingsPage } from './pages/settings/settings-page';
import { StreamPage } from './pages/class-detail/pages/stream/stream-page';
import { ClassworkPage } from './pages/class-detail/pages/classwork/classwork-page';
import { PeoplePage } from './pages/class-detail/pages/people/people-page';
import { GradesPage } from './pages/class-detail/pages/grades/grades-page';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route
        path='/login'
        element={<LoginPage />}
      />
      <Route
        path='/'
        element={<MainLayout />}
      >
        <Route
          index
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/calendar'
          element={
            <ProtectedRoute>
              <CalendarPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/to-review'
          element={
            <ProtectedRoute>
              <ToReviewPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/class/:id/'
          element={
            <ProtectedRoute>
              <ClassDetailPage />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={<StreamPage />}
          />
          <Route
            path='/class/:id/classwork'
            element={<ClassworkPage />}
          />
          <Route
            path='/class/:id/people'
            element={<PeoplePage />}
          />
          <Route
            path='/class/:id/grades'
            element={<GradesPage />}
          />
        </Route>
        <Route
          path='/archived-classes'
          element={
            <ProtectedRoute>
              <ArchivedClassesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/settings'
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='*'
          element={
            <ProtectedRoute>
              <NotFoundPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Route>
  ),
  {
    basename: import.meta.env.BASE_URL,
  }
);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
