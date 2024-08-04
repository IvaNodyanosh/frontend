export async function getCurrentUser(setUser, token) {
  const data = await fetch("http://localhost:3100/api/users/current", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
        .then((data) => data);

    if (data.token) {
        setUser(data);
    }
}
