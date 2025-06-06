/// <reference types="vite/client" />
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ReactMarkdownLatex from './ReactMarkdownLatex';

export default function FileViewer() {
    const { '*': filePath } = useParams();
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        if (filePath) {
            fetch(`${import.meta.env.VITE_PUBLIC_URL}/docs/${filePath}`)
                .then((response) => response.text())
                .then(setContent)
                .catch(() => setContent('Error loading file.'));
        }
    }, [filePath]);

    return (
        <div>
            <Typography variant="h4" gutterBottom>{filePath?.split('/').pop()}</Typography>
            <ReactMarkdownLatex content={content} />
        </div>
    );
}
