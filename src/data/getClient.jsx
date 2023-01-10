export async function getClients() {
    const respon = await fetch(import.meta.env.VITE_API_URL);
    const result = await respon.json();

    return result;
}