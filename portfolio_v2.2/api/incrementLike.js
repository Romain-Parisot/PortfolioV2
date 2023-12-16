const likes = {
  project1: 0,
  project2: 0,
  project3: 0,
  project4: 0,
};

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { project } = req.body;
    if (project in likes) {
      likes[project] += 1;
    } else {
      res.status(400).send('Invalid project');
      return;
    }
  }

  const response = Object.entries(likes).map(([label, like]) => ({ label, like }));
  res.status(200).json(response);
};
