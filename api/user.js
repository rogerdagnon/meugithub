const users = [
  {
    username: "test",
    password: "test",
  },
];

export const getUsers = async () => Promise.resolve(users);

export const getUser = async ({ username, password }) => {
  return Promise.resolve(
    users.find(
      (user) => username === user.username && password === user.password
    )
  );
};
