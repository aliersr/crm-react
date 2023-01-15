const URL = import.meta.env.VITE_API_URL;
const URLone = import.meta.env.VITE_API_URLONE;

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
        'Content-Type': 'application/json ',
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function updateClient(id, data) {
  try {
    const respon = await fetch(`${URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    await respon.json();
  } catch (error) {
    console.log(error);
  }
}
