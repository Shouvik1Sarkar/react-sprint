function a() {
  const x = 12;
  function b() {
    return x;
  }

  return b;
}

const c = a();
console.log(c());
