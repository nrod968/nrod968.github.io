import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';
import { fetchFolderStructure } from '../utils/utils';

const drawerWidth = 240;

export default function ClippedDrawer() {
    const [folderStructure, setFolderStructure] = useState<any>({});

    useEffect(() => {
        fetchFolderStructure().then(setFolderStructure);
    }, []);

    const renderTree = (nodes: any, path = '') => {
        return Object.entries(nodes).map(([key, value]) => {
            const nodePath = path ? `${path}/${key}` : key;
            if (typeof value === 'string') {
                return (
                    <TreeItem
                        key={nodePath}
                        itemId={nodePath}
                        label={
                            <Link to={`/${nodePath}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Box display="flex" alignItems="center">
                                    {value}
                                </Box>
                            </Link>
                        }
                    />
                );
            }
            return (
                <TreeItem
                    key={nodePath}
                    itemId={nodePath}
                    label={
                        <Box display="flex" alignItems="center">
                            {key}
                        </Box>
                    }
                >
                    {renderTree(value, nodePath)}
                </TreeItem>
            );
        });
    };

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
                <SimpleTreeView>
                    {renderTree(folderStructure)}
                </SimpleTreeView>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}
