export async function getOrders(setOrders) {
  const token = localStorage.getItem("token");
  const data = await fetch("http://localhost:3100/api/orders/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.error(error));
  console.log(data);

  if (data) {
    setOrders(data);
  }
}
