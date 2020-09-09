

module.exports.brackets = (target, property) => {
    const old = target.prototype[property];
    target.prototype[property] = msg => {
        msg = `[${msg}]`;
        return old(msg);
    }
}
module.exports.sender = name => (target, property) => {
    const old = target.prototype[property];
    //暗号：回溯算法
    target.prototype[property] = msg => {
        msg = `${name} : ${msg}`;
        return old(msg);
    }
}
