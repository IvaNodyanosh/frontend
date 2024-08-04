export async function getCustomer(setCustomer, id) {
  const data = await fetch(`http://localhost:3100/api/users/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.error(error));
  console.log(data);

  if (data) {
    setCustomer({ name: data.name, surname: data.surname });
  }
}
