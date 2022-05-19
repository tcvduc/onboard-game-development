function tryPromise() {
  let index = 0;
  return new Promise(function (resolve) {
    const interval = setInterval(() => {
      console.log(index);
      if (index === 2) {
        resolve("done promise function");
        clearInterval(interval);
      }
      index++;
    }, 1000);
  });
}

async function f() {
  const retPromise = await tryPromise();
  console.log(retPromise);
  console.log("after promise log this");
}

f();
