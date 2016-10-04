function addRemoveElements(commands) {
    let num = 1;
    let arr = [];
    for (let command of commands) {
        if (command == 'add')           arr.push(num);
        else if(command == 'remove')    arr.pop();
        num++;
    }
    console.log(arr.length > 0 ? arr.join('\n') : 'Empty');
}

addRemoveElements(['add','add','add','add']);
addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addRemoveElements(['remove','remove','remove']);