const { error } = require('console')
const {readFile, writeFile} = require('fs/promises')
class profissionReposi{
    constructor({file}){
        this.file = file
    }

    async _currentFileContent(){
        return JSON.parse(await readFile(this.file))
    }
    
    async find(itemId){
        const all = await this._currentFileContent()
        if(!itemId) return all

        return all.find(({ id }) => itemId === id) 
    }
}

module.exports = profissionReposi

const profissionReposi = new profissionReposi({
    file: './../../database/data.js'
})

profissionReposi.find().then(console.log).catch(error => console.log('error', error))