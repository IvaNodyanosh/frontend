

export async function addReview(orderId: string, comment: string, files: File[], setLoading: Function) {
  const formData = new FormData();
  formData.append("comment", comment);
  formData.append("orderId", orderId);

  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }

  const data = await fetch("http://localhost:3100/api/reviews/", {
    method: "POST",
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
