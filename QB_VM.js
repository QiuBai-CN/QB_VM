const {VM, VMScript} = require('vm2')
const CodeGenerate = require('./node_tools/CodeGenerate.js')

module.exports = {
    start(path_){
        // 用于用户来加载把代码放到vm2进行加载
        let code = CodeGenerate(path_)
        let vm = new VM();
        return vm.run(new VMScript(code, `${__dirname}/temp.js`)); // VMScript有两个重要的参数：第一个是执行的代码，第二个是运行之后的路径，也就是在index.js中运行之后，会生成一个temp.js，temp.js存的是code的代码
    }
}