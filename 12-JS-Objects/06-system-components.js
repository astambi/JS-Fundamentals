function systemComponents(arr) {
    let systemComponents = new Map(); // system - component - subcomponent
    for (let line of arr) {
        let [system, component, subcomponent] = line.split(/\s*\|\s*/g);
        if (!systemComponents.has(system))
            systemComponents.set(system, new Map);
        if (!systemComponents.get(system).has(component))
            systemComponents.get(system).set(component, new Set); // unique subcomponents
        systemComponents.get(system).get(component).add(subcomponent);
    }
    // sort systems
    let systemsSorted = [...systemComponents.keys()].sort(function (a, b) {
        let componentsA = [...systemComponents.get(a).keys()];
        let componentsB = [...systemComponents.get(b).keys()];
        if (componentsA.length != componentsB.length)
            return componentsB.length - componentsA.length; // DESC components count
        return a.localeCompare(b);                          // alphabetically
    });
    for (let system of systemsSorted) {
        console.log(system);
        // sort components
        let componentsSorted = [...systemComponents.get(system).keys()].sort(function (a, b) {
            let subcomponentsA = [...systemComponents.get(system).get(a)];
            let subcomponentsB = [...systemComponents.get(system).get(b)];
            return subcomponentsB.length - subcomponentsA.length;  // DESC subcomponents count
        });
        for (let component of componentsSorted) {
            console.log(`|||${component}`);
            for (let subcomponent of systemComponents.get(system).get(component))
                console.log(`||||||${subcomponent}`);
        }
    }
}

// function systemComponents (input) {
//     let systemsRegister = new Map();	// system - component - subcomponent
//     for (let line of input) {
//         let [system, component, subcomponent] = line.split(/\s*\|\s*/g);
//         if (!systemsRegister.has(system))
//             systemsRegister.set(system, new Map);
//         if (!systemsRegister.get(system).has(component))
//             systemsRegister.get(system).set(component, new Set);
//         systemsRegister.get(system).get(component).add(subcomponent);
//     }
//     let systems = [...systemsRegister].sort(sortSystems);
//     for (let [system, components] of systems) {
//         console.log(system);
//         components = [...components].sort(sortComponents);
//         for (let [component, subcomponents] of components) {
//             console.log(`|||${component}`);
//             subcomponents.forEach(subcomponent => console.log(`||||||${subcomponent}`));
//         }
//     }
//
//     function sortSystems(a, b) {
//         if (a[1].size != b[1].size)
//             return b[1].size - a[1].size; // DESC components count
//         return a[0].toLowerCase().localeCompare(b[0].toLowerCase()); // ASC systemName alphabet, case-insensitive
//     }
//
//     function sortComponents(a, b) {
//         if (a[1].size != b[1].size)
//             return b[1].size - a[1].size; // DESC components count
//     }
// }

systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);