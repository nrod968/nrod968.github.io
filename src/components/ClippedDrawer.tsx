import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { fetchFolderStructure } from '../utils/utils';

const drawerWidth = 240;

export default function ClippedDrawer() {
    const [folderStructure, setFolderStructure] = useState<Record<string, string[]>>({});

    useEffect(() => {
        fetchFolderStructure().then(setFolderStructure);
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" sx={{ zIndex: 1201 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap>Markdown Viewer</Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    {Object.entries(folderStructure).map(([folder, files]) => (
                        <React.Fragment key={folder}>
                            <Typography sx={{ padding: '8px 16px', fontWeight: 'bold' }}>{folder}</Typography>
                            <List>
                                {files.map((file) => (
                                    <ListItem key={file} disablePadding>
                                        <ListItemButton component={Link} to={`/${folder}/${file}`}>
                                            <ListItemText primary={file} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                            <Divider />
                        </React.Fragment>
                    ))}
                </Box>
            </Drawer>
            {/* Content Area */}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}
