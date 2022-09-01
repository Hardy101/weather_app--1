let myPromise = new Promise(function (sychResolve, myReject) {
  let x = 0;

  // some code (try to change x to 5)

  if (x == 0) {
    sychResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  },
  function (cmon) {
    console.log(cmon);
  }
);

const myRequest = async () => {
  const requestData = await fetch(
    "https://my-json-server.typicode.com/typicode/demo/posts/1"
  );
  console.log(await requestData.json())
};

myRequest()
