export async function getList() {
  const data = await fetch("http://localhost:8080/demo");
  return await data.json();
}

export async function setItem(item) {
  const data = await fetch("http://localhost:8080/users/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: item.name,
      email: item.email,
      phone: item.phone,
      password: item.password,
    }),
  });

  return await data.json();
}

export async function checkLogin(item) {
  const data = await fetch("http://localhost:8080/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: item.email,
      password: item.password,
    }),
  })
    

  return await data.json();
}
