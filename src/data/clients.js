
const URL = import.meta.env.VITE_API_URL;

//Get Clients
export async function getClients() {
  const respon = await fetch(URL);
  const result = await respon.json();

  return result;
}

//Get a client.
export async function getClient(id) {
  const respon = await fetch(`${URL}/${id}`);
  const result = await respon.json();

  return result;
}

export async function addNewClient(data) {
  
  try {
    const respon = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json '
      }

    });
  } catch (error) {
    console.log(error)
  }
}
