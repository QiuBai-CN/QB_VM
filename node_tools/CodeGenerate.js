var fs = require('fs')

module.exports = function(path_){
    return fs.readFileSync(path_);
}