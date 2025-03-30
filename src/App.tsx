// App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ClippedDrawer from './components/ClippedDrawer';
import FileViewer from './components/FileViewer';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ClippedDrawer />}>
                    <Route path="*" element={<FileViewer />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}
