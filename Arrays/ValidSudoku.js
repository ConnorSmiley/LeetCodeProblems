board1 =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]


board2 =
    [["8", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]


// const something = (board) => {
//         for (let i = 0; i < 9; i++) {
//                 let row = new Set(),
//                     col = new Set(),
//                     box = new Set();
//
//                 for (let j = 0; j < 9; j++) {
//                         let _row = board[i][j];
//                         let _col = board[j][i];
//
//                         let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
//
//                         if (_row != '.') {
//                                 if (row.has(_row)) return false;
//                                 row.add(_row);
//                         }
//                         if (_col != '.') {
//                                 if (col.has(_col)) return false;
//                                 col.add(_col);
//                         }
//
//                         if (_box != '.') {
//                                 if (box.has(_box)) return false;
//                                 box.add(_box);
//                         }
//                 }
//         }
//         return true
// };
//
// console.log(something(board1))
// console.log(something(board2))


const something = (board) => {
    for (let i = 0; i < 9; i++) {
        let row = new Set()
        let col = new Set()
        let box = new Set()
        for (let d = 0; d < 9; d++) {
            let rowd = board[i][d]
            let cold = board[d][i]
            let boxd = board[3 * Math.floor(i / 3) + Math.floor(d / 3)][3 * (i % 3) + (d % 3)]
            if (rowd != '.') {
                if (row.has(rowd)) return false
                row.add(rowd)
            }
            if (cold != '.') {
                if (col.has(cold)) return false
                col.add(cold)
            }
            if (boxd != '.') {
                if (box.has(boxd)) return false
                box.add(boxd)
            }

        }
        return true
    }

};

console.log(something(board1))
console.log(something(board2))










