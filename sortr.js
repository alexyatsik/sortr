(function(global){

    const Sortr = function(arr) {
        return new Sortr.init(arr);
    }


    Sortr.prototype = {

        insertion: function() {
            
            arr = this.arr;
            const sortedArr = [];

            if (arr.length < 2) {
                return arr;
            }
            
            // insert the first and second element into their position
            // because it can be done without any loops
            sortedArr.push(arr[0]);
            if (arr[1] > arr[0]) {
                sortedArr.push(arr[1]);
            } else {
                sortedArr.unshift(arr[1]);
            }
            
            //debugger;
            for (let i = 2; i < arr.length; i++) {
                const current = arr[i];

                let counter = 0;
                if (current <= sortedArr[0]) {
                    sortedArr.unshift(current);
                    continue;
                } else if (current >= sortedArr[sortedArr.length - 1]) {
                    sortedArr.push(current);
                    continue;
                } else {
                    while (true) {
                        if (current >= sortedArr[counter] && current <= sortedArr[counter + 1]) {
                            sortedArr.splice(counter + 1, 0, current);
                            break;
                        } else {
                            counter++;
                        }
                    }
                }
            }

            return sortedArr;
        },

        buble: function() {

            arr = this.arr;
            let sorted;
            do {
                sorted = true;

                for (let current = 0; current < arr.length; current++) {
                    if (arr[current] > arr[current + 1]) {
                        [arr[current], arr[current + 1]] = [arr[current + 1], arr[current]];
                        sorted = false;
                    }
                }
                
            } while (!sorted);

            return arr;
        }

        
    }

    Sortr.init = function(arr) {

        this.arr = arr.slice();

    }

    Sortr.init.prototype = Sortr.prototype;

    global.Sortr = global.S$ = Sortr;

}(window));