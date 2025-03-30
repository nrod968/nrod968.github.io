export async function fetchFolderStructure(): Promise<any> {
    const baseUrl = process.env.PUBLIC_URL || '';
    const response = await fetch(`${baseUrl}/docs-structure.json`);
    return response.json();
}
