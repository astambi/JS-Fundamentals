function assignProperties([prop1, value1, prop2, value2, prop3, value3]) {
    let obj = { [prop1]: value1, [prop2]: value2, [prop3]: value3 };
    console.log(obj);
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);
assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);