export async function getList() {
  const data = await fetch("http://localhost:8080/demo");
  return await data.json();
}

export async function setItem(item) {
  // const data = await fetch("http://localhost:8080/users/add", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //     "Access-Control-Allow-Origin": "*",
  //     'Connection': 'keep-alive',
  //     'Accept': '*/*',
  //   },
  //   body: new URLSearchParams(item),
  // });

  var urlencoded = new URLSearchParams();
  urlencoded.append("name", "Abbas");
  urlencoded.append("password", "po");
  urlencoded.append("email", "abbas@redix.com");
  urlencoded.append("phone", "90909090909");

  let url = "http://localhost:8080/users/add";
  var options = {
    method: "post",
    payload: urlencoded,
  };
  var response = fetch(url, options);
  return response;
}
