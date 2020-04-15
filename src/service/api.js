const url = "https://api.github.com/users";

// "https://api.github.com/users/${input}/repos"

export const fetchUsersbyName = async name => {
  try {
    const response = await fetch(`${url}/${name}/repos`);

    return response.json();
    
  } catch (e) {
    throw Error("Usuário não encontrado");
  }
};

export const fetchUserExample = async () => {
  const response = await fetch("https://api.github.com/users/example");
  return response.json();
};
