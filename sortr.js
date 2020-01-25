(function(global){

    const Sortr = function(arr) {
        return new Sortr.init(arr);
    }


    Sortr.prototype = {

        insertion: function(order) {
            let arr = this.arr;

            if(order === 'descend') {
                for(let i = 1; i < arr.length; i++) {
                    let current = arr[i];
                    if(current < arr[i - 1]) {
                        continue;
                    } else {
                        let prev = i - 1;
                        while(prev >= 0 && arr[prev] < current) {
                            arr[prev + 1] = arr[prev];
                            prev--;
                        }
                        arr[prev + 1] = current;
                    }
                }
            } else {
                for(let i = 1; i < arr.length; i++) {
                    let current = arr[i];
                    if(current >= arr[i - 1]) {
                        continue;
                    } else {
                        let prev = i - 1;
                        while(prev >= 0 && arr[prev] > current) {
                            arr[prev + 1] = arr[prev];
                            prev--;
                        }
                        arr[prev + 1] = current;
                    }

                }
            }

            return arr;
        },

        buble: function(order) {

            let arr = this.arr;
            let sorted;

            if(order === 'descend') {

            } else {
                do {
                    sorted = true;

                    for (let current = 0; current < arr.length; current++) {
                        if (arr[current] > arr[current + 1]) {
                            [arr[current], arr[current + 1]] = [arr[current + 1], arr[current]];
                            sorted = false;
                        }
                    }
                    
                } while (!sorted);
            }

            return arr;
        }

        
    }

    Sortr.init = function(arr) {

        this.arr = arr.slice();

    }

    Sortr.init.prototype = Sortr.prototype;

    global.Sortr = global.S$ = Sortr;

}(window));