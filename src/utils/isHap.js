const checkRequirement = (x, y, z) => {
	if (x === y && y === z) return true;
	if (x !== y && y !== z && z !== x) return true;
	return false;
}

const isHap = (x, y, z) => {
    let shape = checkRequirement(x[0], y[0], z[0]);
    let color = checkRequirement(x[1], y[1], z[1]);
    let bgColor = checkRequirement(x[2], y[2], z[2]);

    return shape && color && bgColor;
}

export default isHap