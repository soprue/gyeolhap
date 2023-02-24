import isHap from "./isHap";

const getHap = (board) => {
    let hap = [];
    
	for (let i = 0; i < 9; i++) {
		for (let j = i + 1; j < 9; j++) {
			for (let k = j + 1; k < 9; k++) {
                if(isHap(board[i], board[j], board[k])) hap.push([i + 1, j + 1, k + 1]);
			}
		}
	}

    return hap;
}

export default getHap