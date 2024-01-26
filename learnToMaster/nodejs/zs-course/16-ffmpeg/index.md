//

const { execSync } = require('child_process');

execSync('ffmpeg -i test.mp4 test.gif', {stdio: 'inherit'});
