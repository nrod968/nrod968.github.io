// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClippedDrawer from './components/ClippedDrawer';
import FileViewer from './components/FileViewer';
import { Typography } from '@mui/material';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ClippedDrawer />}>
                    <Route path=":folder/:file" element={<FileViewer />} />
                    <Route path="*" element={<Typography>Select a markdown file from the sidebar</Typography>} />
                </Route>
            </Routes>
        </Router>
    );
}
