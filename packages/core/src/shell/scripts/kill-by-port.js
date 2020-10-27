const Shell = require('../shell')
const execute = Shell.execute

const executor = {
  async windows (exec, { port }) {
    const cmds = [`for /f "tokens=5" %a in ('netstat -aon ^| find ":${port}" ^| find "LISTENING"') do taskkill /f /pid %a`]
    // eslint-disable-next-line no-unused-vars
    const ret = await exec(cmds, { type: 'cmd' })
    return true
  },
  async linux (exec, { port }) {
    throw Error('暂未实现此功能')
  },
  async mac (exec, { port }) {
    throw Error('暂未实现此功能')
  }
}

module.exports = async function (args) {
  return execute(executor, args)
}
