function coneVolumeArea(input) {
    let [r, h] = input.map(Number);
    let volume = Math.PI * r * r * h / 3;
    let slant = Math.sqrt(r * r + h * h);
    let area = Math.PI * r * (slant + r);
    console.log(`volume = ${volume}`);
    console.log(`area = ${area}`);
}

coneVolumeArea(['3','5']);
coneVolumeArea(['3.3','7.8']);