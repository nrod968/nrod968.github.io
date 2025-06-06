// utils.ts
export async function fetchFolderStructure(): Promise<any> {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_URL}/docs-structure.json`);
    return response.json();
}
