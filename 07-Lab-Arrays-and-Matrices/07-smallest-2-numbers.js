function smallest2Numbers(arr) {
    console.log(arr.sort((a, b) => a-b)
                    .slice(0, 2)
                    .join(' '));
}

smallest2Numbers(['30', '15', '50', '5']);
smallest2Numbers(['3', '0', '10', '4', '7', '3']);