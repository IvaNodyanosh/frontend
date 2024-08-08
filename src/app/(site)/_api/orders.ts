export async function createOrder(
  name: string,
  surname: string,
  email: string,
  phone: string,
  message: string,
  files: File[],
  setLoading: Function
) {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("surname", surname);
  formData.append("phone", phone);
  formData.append("message", message);
  formData.append("email", email);
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }

  const data = await fetch("http://localhost:3100/api/orders/", {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      if (!res.ok) {
        setLoading("error");
      } return res.json();
    })
    .then((data) => data);

  if (data._id) {
    setLoading("loading");
    console.log(data);
  } else {
    setLoading("error");
  }
}

export async function registerOrder(
  token: string,
  message: string,
  files: File[],
  setLoading: Function,
) {
  const formData = new FormData();
  formData.append("message", message);
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }

  console.log(token);

  const data = await fetch("http://localhost:3100/api/orders/register", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: formData,
  })
    .then((res) => {
      if (!res.ok) {
        setLoading("error");
      }
      return res.json();
    })
    .then((data) => data);

  if (data._id) {
    setLoading("loading");
    console.log(data);
  } else {
    setLoading("error");
  }
}