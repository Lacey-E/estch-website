export async function getUsers() {
    // Fetch data from an external API endpoint
    const res = await 
    fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json();
  }