function objects() {
    let obj = { name : "SoftUni", age : 3 };
    console.log(obj); // Object {name: "SoftUni", age: 3}

    obj['site'] = "https://softuni.bg";
    obj.age = 10;
    obj["name"] = "Software University";
    console.log(obj);       // Object {name: "Software University", age: 10, site: "https://softuni.bg"}

    delete obj.name;        // Delete! a property
    obj.site = undefined;   // Delete a property value
    console.log(obj);       // Object {age: 10, site: undefined}

    let sofia = { name: "Sofia",
        lat: 42.696552,
        long: 23.326011 };

    console.log(Object.keys(sofia)); // ["name", "lat", "long"]

    let emptyObj = { };
    console.log(Object.keys(emptyObj)); // []

    console.log(Object.hasOwnProperty('name')); // true
    if (sofia.age === undefined)    console.log("Key 'age' does not exist");
    if (sofia.name !== undefined)   console.log("Key 'name' exists");

// JSON
    obj = { name : "SoftUni", age : 3 };
    let str = JSON.stringify(obj);
    console.log(str);                   // {"name":"SoftUni","age":3}

    str = "{\"name\":\"Nakov\",\"age\":24}";
    obj = JSON.parse(str);
    console.log(obj);                   // Object {name: "Nakov", age: 24}


    let polygon = {
        about: { name: "triangle", color: "red" },
        corners: [{x:2, y:6}, {x:3, y:1}, {x:-2, y:2}]
    };
    console.log(JSON.stringify(polygon));   // {"about":{"name":"triangle","color":"red"},"corners":[{"x":2,"y":6},{"x":3,"y":1},{"x":-2,"y":2}]}
    console.log(polygon.about.color);       // red
// polygon.about.location = {x:4, y:-7};
    console.log(polygon);
}

function assocArrays() {
    let phonebook = { };
    phonebook["John Smith"] = "+1-555-8976"; // Add
    phonebook["Lisa Smith"] = "+1-555-1234";
    phonebook["Sam Doe"] = "+1-555-5030";
    phonebook["Nakov"] = "+359-899-555-592";
    phonebook["Nakov"] = "+359-2-981-9819"; // Replace
    delete phonebook["John Smith"];         // Delete!
    console.log(Object.keys(phonebook).length); // 3

    for (let key in phonebook)              // Print
        console.log(`${key} -> ${phonebook[key]}`);

    console.log(phonebook);

    let obj = {
        "1": 'one',
        "3": 'three',
        "2": 'two',
        "z": 'z',
        "a": 'a'
    };
    console.log(Object.keys(obj)); // ["1", "2", "3", "z", "a"]
    console.log(obj); // Object {1: "one", 2: "two", 3: "three", z: "z", a: "a"}
}

function maps() {
    let phonebook = new Map();
    phonebook.set("John Smith", "+1-555-8976"); // Add
    phonebook.set("Lisa Smith","+1-555-1234");
    phonebook.set("Sam Doe", "+1-555-5030");
    phonebook.set("Nakov", "+359-899-555-592");
    phonebook.set("Nakov", "+359-2-981-9819");  // Replace
    console.log(phonebook.get("Nakov"));
    phonebook.delete("John Smith");             // Delete

    phonebook.set("Nakov", new Map);
    phonebook.get("Nakov").set('number', '123456');
    phonebook.get("Nakov").set('age', 26);

    console.log(phonebook.size);                // 3

    for (let [key, value] of phonebook)         // Print
        console.log(`${key} -> ${value}`);

    let map = new Map([
        ["1", 'one'],
        ["3", 'three'],
        ["2", 'two'],
        ["z", 'z'],
        ["a", 'a']
    ]);

    console.log(map);   // Map {"1" => "one", "3" => "three", "2" => "two", "z" => "z", "a" => "a"}
    console.log(Array.from(map.keys()));    // ["1", "3", "2", "z", "a"]
}

function sets() {
    let names = new Set();
    names.add("Peter");
    names.add(20);
    names.add("Maria");
    names.add(5);
    console.log(names.has('Peter')); // true
    names.add("Maria"); // Duplicates are skipped
    names.delete(20); // Delete element if exists

    console.log(names.size);
    console.log([...names].length);

    for (let name of names)
        console.log(name);
    console.log([...names].join(', '));
    console.log(Array.from(names).join(', '))
}

objects();
assocArrays();
maps();
sets();