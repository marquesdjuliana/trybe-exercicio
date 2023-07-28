const fs = require('fs/promises');
const { join } = require('path');

const path = join(__dirname, '..', 'data', 'data.json');

const readFile = async () => {
  const json = await fs.readFile(path); 
  const data = JSON.parse(json);
  return data;
 };

const getNextTweetId = async () => {
  const data = await readFile();
  return data.postsAutoIncrement; 
};

const salveTweet = async (tweet) => {
  const createdTweet = {
  ...tweet,
  id: await getNextTweetId(),
  createdAt: new Date(),
  updateAt: new Date(),
 };

 const data = await readFile();
 data.posts.push(createdTweet);
 data.postsAutoIncrement += 1;
 await fs.writeFile(path, JSON.stringify(data));

 return createdTweet;
};

module.exports = {
  salveTweet,
};