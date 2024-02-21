/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visited = new Array(rooms.length);
    let stack = [0]; //Saves new, unused keys
    let count = 1;

    while(stack.length) {
        let keys = rooms[stack.pop()];
        for(let k of keys) {
            if(!visited[k]) {
                stack.push(k);
                visited[k] = 1;
                count++;
            }
        }
    }
    return rooms.length === count;
    
};
