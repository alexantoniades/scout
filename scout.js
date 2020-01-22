const PouchDB = require('pouchdb');
const chokidar = require('chokidar');
const uuidv4 = require('uuid/v4');
//--------------------------------------------------------------------//
// scout handler
const scout = (directoryPath, databaseName) => {
    // Initialise database object
    this.database = new PouchDB(databaseName);
    // Create database if it doesn't exists and print info to console
    this.database.info().then((info) => {
        console.log(info);
    }).catch((err) => {
        console.log(err);
    });
    // Initialise watcher
    this.watcher = chokidar.watch(directoryPath, {
        //ignored: /(^|[\/\\])\../, // ignore dotfiles
        persistent: true
    })
    // On all events...
    .on('all', (event, path) => {
        this.database.put({
            // Generate unique ID
            _id: uuidv4(),
            // Store event (add, addDir, remove etc.)
            action: event,
            // Store affected file path
            file: path
            //status: (stats) ? stats : None
        })
        .catch((error) => {
            console.log(error);
        })
    });
};
//--------------------------------------------------------------------//
if (require.main === module) {
    // Collect arguments if script is used in command line
    scout(process.argv[2], process.argv[3]);
};
//--------------------------------------------------------------------//
module.exports = {
    // Export handler as library module
    scout
};
//--------------------------------------------------------------------//