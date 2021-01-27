const pro = async () => {
  let x = await fetch('get', 'https://jsonplaceholder.typicode.com/posts');
  return x;
};
