if ("serviceWorker" in navigator) {
  //   Listening for windows load
  window.addEventListener("load", () => {
    // 01 registering service worker
    navigator.serviceWorker
      .register("sw.js")
      .then(() => {
        console.log("service worker registered!");
      })
      // 02 if a promise throws an error you would want to catch the error and perform an action
      .catch((err) => {
        console.log(err);
      });
  });
}
