const fs = require('fs')

fs.stat('novoarquivo.txt', (err, stats) => {

  if(err) {
    console.log(err)
    return
  } else {
    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
    console.log(stats.ctime.getHours + ':' +  stats.ctime.getMinutes())
    console.log(stats.size)
  }

})
