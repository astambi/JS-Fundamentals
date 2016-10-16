function angularParser(input) {
    let angularElements = new Map();    // app: appObj
    let tempElements = new Map();		// app: appObj

    for (let line of input) {
        let appPattern = /^\$app='([^']+)'$/;
        let mvcPattern = /^\$(model|view|controller)='([^']+)'&app='([^']+)'$/;
        let appMatch = appPattern.exec(line);	// appName
        let mvcMatch = mvcPattern.exec(line);	// mvcType, mvcName, appName

        let appObj = {controllers: new Set, models: new Set, views: new Set}; // unique MVC elements
        if (appMatch) {
            let app = appMatch[1];
            if (!angularElements.has(app)) {
                if (tempElements.has(app)) {
                    appObj = tempElements.get(app);
                    tempElements.delete(app);
                }
                angularElements.set(app, appObj);
            }
        } else if (mvcMatch) {
            let [mvcType, mvcName, app] = [mvcMatch[1], mvcMatch[2], mvcMatch[3]];
            if (angularElements.has(app)) 	appObj = angularElements.get(app);
            else if (tempElements.has(app))	appObj = tempElements.get(app);
            switch(mvcType) {
                case 'model':		appObj.models.add(mvcName); break;
                case 'view':		appObj.views.add(mvcName); break;
                case 'controller':	appObj.controllers.add(mvcName); break;
            }
            if (angularElements.has(app))	angularElements.set(app, appObj);
            else 							tempElements.set(app, appObj);
        }
    }
    // sort apps
    let sortedApps = [...angularElements.keys()].sort(function (a, b) {
        let controllersA = angularElements.get(a).controllers.size;
        let controllersB = angularElements.get(b).controllers.size;
        if (controllersA != controllersB)
            return controllersB - controllersA;	// DESC controllers count
        let modelsA = angularElements.get(a).models.size;
        let modelsB = angularElements.get(b).models.size;
        if (modelsA != modelsB)
            return modelsA - modelsB;	// ASC models count, else => order of appearance
    });
    let sortedMVCObject = {};
    for (let app of sortedApps) {
        let appObj = angularElements.get(app);
        // sort app MVC elements
        appObj.models = [...appObj.models].sort();
        appObj.views = [...appObj.views].sort();
        appObj.controllers = [...appObj.controllers].sort();
        sortedMVCObject[app] = appObj;
    }
    console.log(JSON.stringify(sortedMVCObject));
}


angularParser([
    "$app='MyApp'",
    "$controller='My Controller'&app='MyApp'",
    "$model='My Model'&app='MyApp'",
    "$view='My View'&app='MyApp'"
]);

angularParser([
    "$controller='PHPController'&app='Language Parser'",
    "$controller='JavaController'&app='Language Parser'",
    "$controller='C#Controller'&app='Language Parser'",
    "$controller='C++Controller'&app='Language Parser'",
    "$app='Garbage Collector'",
    "$controller='GarbageController'&app='Garbage Collector'",
    "$controller='SpamController'&app='Garbage Collector'",
    "$app='Language Parser'"
]);

angularParser([
    "$controller='PHPController'&app='Language Parser'",
    "$controller='JavaController'&app='Language Parser'",
    "$controller='C#Controller'&app='Language Parser'",
    "$controller='C++Controller'&app='Language Parser'",
    // "$app='Garbage Collector'",
    "$controller='GarbageController'&app='Garbage Collector'",
    "$controller='SpamController'&app='Garbage Collector'"
    // "$app='Language Parser'"
]);