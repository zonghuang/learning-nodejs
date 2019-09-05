const template = require('art-template')
const fs = require('fs')

fs.readFile('./art-template.html', function (err, data) {
    if (err) {
        return console.log('读取文件失败')
    }

    const ret = template.render(data.toString(), {
        name: 'ZongHuang',
        age: 21,
        province: '深圳市',
        hobbies: [
            '写代码',
            '唱歌',
            '打游戏'
        ],
        title: '个人信息'
    })

    console.log(ret)
})

