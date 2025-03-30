// utils.ts
export async function fetchFolderStructure(): Promise<any> {
    const response = await fetch(`${process.env.PUBLIC_URL}/docs-structure.json`);
    return response.json();
}
