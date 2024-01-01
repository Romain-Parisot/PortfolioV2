const fs = require('fs');
const path = require('path');

const likesFilePath = path.join(process.cwd(), 'likes.json');

function readLikesFile() {
  try {
    const likesData = fs.readFileSync(likesFilePath, 'utf8');
    return JSON.parse(likesData);
  } catch (error) {
    return {
      VF: 0,
      PR: 0,
      P3: 0,
      P4: 0,
    };
  }
}

function saveLikesToFile(likes) {
  fs.writeFileSync(likesFilePath, JSON.stringify(likes, null, 2), 'utf8');
}

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { code } = req.body;
    const likes = readLikesFile();

    const projectMap = {
      VF: 'ViolonFrance',
      PR: 'PlessisRobinson',
      P3: 'project3',
      P4: 'project4',
    };

    const project = projectMap[code];

    if (project && project in likes) {
      likes[project] += 1;
      saveLikesToFile(likes);
    } else {
      res.status(400).send('Invalid project');
      return;
    }
  }

  const likes = readLikesFile();

  const response = Object.entries(likes).map(([label, like]) => {
    let code = '';
    if (label === 'ViolonFrance') {
      code = 'VF';
    } else if (label === 'PlessisRobinson') {
      code = 'PR';
    } else if (label === 'project3') {
      code = 'P3';
    } else if (label === 'project4') {
      code = 'P4';
    }

    return { code, label, like };
  });

  res.status(200).json(response);
};
