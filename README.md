# group5-database-manager

### Node js and python3 are requered.
  - node download: https://nodejs.org/en/download/
  - python download: https://www.python.org/downloads/

### Important!
 - After cloning repository, run `npm install` in the parent directory to install needed packages for the server and database node files.

### Generating inventory dummy data
 - In the parent direcotry, run `cp ./server/app/config/app.config.sample.json ./server/app/config/app.config.json`
 - Navigate to the newly make app.config.json file and fill in with your group5 database informtion provided by Dr. Otto
 - In the parent directory, run `npm run debug` to build and start the server
 - In the parent directory, run `npm run generate` to create inventory dummy data insert statements.
   - File with the generated insert statements will appear in the parent directory
