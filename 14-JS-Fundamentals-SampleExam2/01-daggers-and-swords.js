function daggersAndSwords(input) {
    input = input.map(Number).map(x => Math.floor(x));
    console.log(`<table border="1">
<thead>
<tr><th colspan="3">Blades</th></tr>
<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>
</thead>
<tbody>`);

    for (let width of input) {
        if (width <= 10) continue;
        let type = '';
        let type2 = 'dagger';
        if (width > 40) type2 = 'sword';
        switch (width % 5) {
            case 1: type = 'blade'; break;
            case 2: type = 'quite a blade';break;
            case 3: type = 'pants-scraper';break;
            case 4: type = 'frog-butcher';break;
            case 0: type = '*rap-poker';break;
        }
        console.log(`<tr><td>${width}</td><td>${type2}</td><td>${type}</td></tr>`);
    }
    console.log(`</tbody>
</table>`);
}

daggersAndSwords([
    '17.8',
    '19.4',
    '13',
    '55.8',
    '126.96541651',
    '3'
]);