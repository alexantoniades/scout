const PouchDB = require('pouchdb');
const chokidar = require('chokidar');
const uuidv4 = require('uuid/v4');

const scout = (directoryPath, databaseName) => {
    this.database = new PouchDB(databaseName);
    this.database.info().then((info) => {
        console.log(info);
    }).catch((err) => {
        console.log(err);
    });
    this.watcher = chokidar.watch(directoryPath, {
        //ignored: /(^|[\/\\])\../, // ignore dotfiles
        persistent: true
    })
    .on('all', (event, path) => {
        this.database.put({
            _id: uuidv4(),
            action: event,
            file: path
            //status: (stats) ? stats : None
        })
        .catch((error) => {
            console.log(error);
        })
    });
};

if (require.main === module) {
    scout(process.argv[2], process.argv[3]);
}
  
module.exports = {
    scout
};
