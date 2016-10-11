function angularParser(input) {
    let angularElements = new Map();    // app: appObj
    let tempElements = new Map();		// app: appObj
    for (let line of input) {
        let appPattern = /^\$app='([^']+)'$/;
        let controllerPattern = /^\$controller='([^']+)'&app='([^']+)'$/;
        let modelPattern = /^\$model='([^']+)'&app='([^']+)'$/;
        let viewPattern = /^\$view='([^']+)'&app='([^']+)'$/;
        let appMatch = appPattern.exec(line);				// app
        let controllerMatch = controllerPattern.exec(line);	// controller, app
        let modelMatch = modelPattern.exec(line);			// model, app
        let viewMatch = viewPattern.exec(line);				// view, app

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
        } else if (controllerMatch) {
            let [controller, app] = [controllerMatch[1], controllerMatch[2]];
            if (angularElements.has(app)) {
                appObj = angularElements.get(app);
                appObj.controllers.add(controller);
                angularElements.set(app, appObj);
            } else {
                if (tempElements.has(app))
                    appObj = tempElements.get(app);
                appObj.controllers.add(controller);
                tempElements.set(app, appObj);
            }
        } else if (modelMatch) {
            let [model, app] = [modelMatch[1], modelMatch[2]];
            if (angularElements.has(app)) {
                appObj = angularElements.get(app);
                appObj.models.add(model);
                angularElements.set(app, appObj);
            } else {
                if (tempElements.has(app))
                    appObj = tempElements.get(app);
                appObj.models.add(model);
                tempElements.set(app, appObj);
            }
        } else if (viewMatch) {
            let [view, app] = [viewMatch[1], viewMatch[2]];
            if (angularElements.has(app)) {
                appObj = angularElements.get(app);
                appObj.views.add(view);
                angularElements.set(app, appObj);
            } else {
                if (tempElements.has(app))
                    appObj = tempElements.get(app);
                appObj.views.add(view);
                tempElements.set(app, appObj);
            }
        }
    }
    // sort apps
    let sortedApps = [...angularElements.keys()].sort(function (a, b) {
        let controllersA = angularElements.get(a).controllers.size;
        let controllersB = angularElements.get(b).controllers.size;
        if (controllersA < controllersB)	return 1;		// DESC controllers count
        if (controllersA > controllersB)	return -1;
        let modelsA = angularElements.get(a).models.size;
        let modelsB = angularElements.get(b).models.size;
        if (modelsA < modelsB)	return -1;					// ASC models count
        if (modelsA > modelsB)	return 1;
        // return -1;										// NB. order of appearance 90/100 vs 100/100
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