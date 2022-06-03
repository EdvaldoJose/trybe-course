const getUserGit = (user) => `https://api.github.com/users/${user}`;

const getUserInfo = async (usernames) => {
  const url = getUserGit(usernames);
  const result = await fetch(url);
  const data = await result.json();
  const { name, location, bio, company } = data;
  return { name, location, bio, company };
};

module.exports = {
  getUserInfo,
  getUserGit,
 };


