// Notes
/*
    every fetch request uses the get request by default!
*/
// GET Request
fetch("https://my-json-server.typicode.com/typicode/demo/posts?id=1")
  .then((res) => {
    //   console.log(res.json());
    // turning our local database into a Javascript usable data-using a JSON Method
    return res.json();
    //   res.json() is a promise
  })
  .then((data) => {
    console.log(data);
  });
////////////////////////////////////////////////////////
// POST Request
/*
fetch("https://my-json-server.typicode.com/typicode/demo/posts", {
  method: "POST",
  body: {
    id: 4,
    title: "this is the fourth post",
  },
})
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
 */
////////////////////////////////////////////////////////
// POST Method
fetch("https://my-json-server.typicode.com/typicode/demo/posts", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    id: 4,
    title: "this is the fourth post",
  }),
})
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });

////////////////////////////////////////////////////////
// PATCH Method
fetch("https://my-json-server.typicode.com/typicode/demo/posts/1", {
  method: "PATCH",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    title: "this is the frst post", // Item to be changed
  }),
})
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
////////////////////////////////////////////////////////
// PUT Method
fetch("https://my-json-server.typicode.com/typicode/demo/posts/1", {
  method: "PUT",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    title: "this is the frst post", // Item to be changed
  }),
})
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
////////////////////////////////////////////////////////
// DELETE Method
fetch("https://my-json-server.typicode.com/typicode/demo/posts/3", {
  method: "DELETE",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     title: "this is the frst post", // Item to be changed
  //   }),
})
  .then((res) => {
    if (res.ok) return res.json();
  })
  .then((data) => {
    console.log(data);
  });
// // n!/(n-r)!
