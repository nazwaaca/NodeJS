const chalk = require('chalk')
const tasks = {
    tasks: [{
        text: 'Beli Gula',
        completed: 'belum'
    }, {
        text: 'Beli Sayur',
        completed: 'belum'
    }, {
        text: 'Beli Eskrim',
        completed: 'sudah'
    },   
        {
        text: 'Beli Terigu',
        completed: 'belum'
    },
        {
        text: 'Beli Chiki',
        completed: 'sudah'
    }
    ],
    unfinishTask() {
        return this.tasks.filter((task) => task.completed === 'belum')
    },
    finishTask(){
        return this.tasks.filter((task) => task.completed === 'sudah')
    }
    
}
console.log(chalk.red.inverse('== List Daftar Belanja (Belum)=='))
console.log(tasks.unfinishTask())
console.log(chalk.green.inverse.bold('== List Daftar Belanja (Belum)=='))
console.log(tasks.finishTask())
