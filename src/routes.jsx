import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';

// Inputs
// import Testing from './pages/Testing';
import TextField from './pages/TextField';
import Select from './pages/Select';
import RadioButton from './pages/RadioButton';
import Checkbox from './pages/Checkbox';
import Autocomplete from './pages/Autocomplete';
import DatePicker from './pages/DatePicker';
import Wysiwyg from './pages/Wysiwyg';

// API
import Promise from './pages/Promise';

// *
import Page404 from './pages/Page404';
import Maintenance from './pages/Maintenance';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        // Inputs
        //   { path: 'testing', element: <Testing /> },
        { path: '/', element: <Navigate to="text-field" /> },
        { path: 'text-field', element: <TextField /> },
        { path: 'select', element: <Select /> },
        { path: 'radio-button', element: <RadioButton /> },
        { path: 'checkbox', element: <Checkbox /> },
        { path: 'autocomplete', element: <Autocomplete /> },
        { path: 'date-picker', element: <DatePicker /> },
        { path: 'wysiwyg', element: <Wysiwyg /> },
        // Uploads
        { path: 'file', element: <Maintenance /> },
        { path: 'multiple-files', element: <Maintenance /> },
        { path: 'image', element: <Maintenance /> },
        { path: 'cropped-image', element: <Maintenance /> },
        // Components
        { path: 'table', element: <Maintenance /> },
        { path: 'app-bar', element: <Maintenance /> },
        { path: 'menu', element: <Maintenance /> },
        { path: 'dialog', element: <Maintenance /> },
        { path: 'snackbar', element: <Maintenance /> },
        // Templates
        { path: 'loading', element: <Maintenance /> },
        { path: 'card', element: <Maintenance /> },
        { path: 'chip', element: <Maintenance /> },
        { path: 'not-found', element: <Maintenance /> },
        //   Utilities
        { path: 'date-format', element: <Maintenance /> },
        { path: 'number-format', element: <Maintenance /> },
        { path: 'get-filename', element: <Maintenance /> },
        { path: 'export-csv', element: <Maintenance /> },
        { path: 'export-pdf', element: <Maintenance /> },
        { path: 'view-pdf', element: <Maintenance /> },
        { path: 'qr-code', element: <Maintenance /> },
        // API
        { path: 'get-data', element: <Maintenance /> },
        { path: 'handle-submit', element: <Maintenance /> },
        { path: 'handle-delete', element: <Maintenance /> },
        { path: 'promise', element: <Promise /> },
        { path: '*', element: <Page404 replace /> },
      ],
    },
  ]);
}
