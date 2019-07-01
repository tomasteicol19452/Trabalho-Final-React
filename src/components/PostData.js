export const getPosts = async () => {
  const response = await fetch("http://localhost:8080/posts");

  if (response.ok)
    return response.json();
  else
  {
    console.log(response)
    return [];
  }
};
