#!/usr/bin/env node

// console.log("https://segmentfault.com/a/1190000019396484?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly");
// console.log('hello world!')
// console.log(process.argv)

const program = require('commander')
const inquirer = require('inquirer')
const shell = require('shelljs')

const initAction = () => {
    inquirer.prompt([{
        type: 'input',
        message: '请输入项目名称:',
        name: 'name'
    }]).then(answers => {
        console.log('项目名为：', answers.name)
        console.log('正在拷贝项目，请稍等')
        
        const remote = 'https://github.com/PanJiaChen/vue-admin-template.git'
        const curName = 'vue-admin-template'
        const tarName = answers.name

        shell.exec(`
                git clone ${remote} --depth=1
                mv ${curName} ${tarName}
                rm -rf ./${tarName}/.git
                cd ${tarName}
                npm i
              `, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`)
                return
            }
            console.log(`${stdout}`)
            console.log(`${stderr}`)
        });
        console.log(`done.`)
    })
}

program.version(require('./package.json').version)

program
    .command('init')
    .description('创建项目')
    .action(initAction)

program.parse(process.argv)


// const pkg = require('./package.json')
// const command = process.argv[2]
// switch (command) {
//     case '-v'://查询版本
//     console.log(pkg.version)
//     break
//     default:
//     break
// }