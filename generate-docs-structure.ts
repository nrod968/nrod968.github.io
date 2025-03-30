import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const docsPath = path.join(__dirname, 'public', 'docs');
const outputPath = path.join(__dirname, 'public', 'docs-structure.json');

// Define the folder structure type
type FolderStructure = {
    [key: string]: FolderStructure | string | null;
};

// Recursive function to generate folder structure
function generateStructure(dir: string): FolderStructure {
    const result: FolderStructure = {};

    try {
        const items = fs.readdirSync(dir);

        for (const item of items) {
            const itemPath = path.join(dir, item);
            const stat = fs.statSync(itemPath);

            if (stat.isDirectory()) {
                result[item] = generateStructure(itemPath);
            } else if (stat.isFile() && path.extname(item) === '.md') {
                result[item] = path.basename(item, '.md'); // Mark as null for files
            }
        }
    } catch (error) {
        console.error(`Error reading directory ${dir}:`, error);
    }

    return result;
}

function generateDocsStructure(): void {
    if (!fs.existsSync(docsPath)) {
        console.error('Error: public/docs directory not found.');
        return;
    }

    const structure = generateStructure(docsPath);

    try {
        fs.writeFileSync(outputPath, JSON.stringify(structure, null, 2));
        console.log('✅ docs-structure.json has been generated successfully!');
    } catch (error) {
        console.error('Error writing to docs-structure.json:', error);
    }
}

generateDocsStructure();
