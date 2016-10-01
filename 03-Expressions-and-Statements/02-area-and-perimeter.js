function areaPerimeter(dimensions) {
    let [a, b] = dimensions.map(Number);
    console.log(a * b); 		// area
    console.log((a + b) * 2);	// perimeter
}

areaPerimeter(['2','2']);
areaPerimeter(['1','3']);
areaPerimeter(['2.5','3.14']);