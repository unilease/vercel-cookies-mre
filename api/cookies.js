export default async (req, res) => {
  res.setHeader('Set-Cookie', ['cookie-one=a', 'cookie-two=b', 'cookie-three=c']);
  res.json(true);
};
