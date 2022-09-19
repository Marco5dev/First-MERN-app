export const getTest = async () => {
  try {
    const res = await fetch("http://localhost:8080/test", {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      }
    })
    return await res.json();
  } catch (err) {

  }
}