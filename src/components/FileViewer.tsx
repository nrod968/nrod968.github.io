import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Typography from '@mui/material/Typography';

export default function FileViewer() {
    const { folder, file } = useParams<{ folder: string; file: string }>();
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        if (folder && file) {
            fetch(`${process.env.PUBLIC_URL}/docs/${folder}/${file}`)
                .then((response) => response.text())
                .then(setContent)
                .catch(() => setContent('Error loading file.'));
        }
    }, [folder, file]);

    return (
        <div>
            <Typography variant="h4" gutterBottom>{file}</Typography>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}
