export const getPosts = async () => {
  //coloca na variavel response o ficheiro jason que vamos busca a API
  const response = await fetch("http://localhost:8080/posts");
  
  //verifica se returnou o que queremos
  if (response.ok)
    return response.json();
  else
  {
    //console log do problema no caso de nao retornar os dados
    console.log(response)
    return [];
  }
};
