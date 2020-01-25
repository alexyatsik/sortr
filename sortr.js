(function(global){

    const Sortr = function(arr) {
        return new Sortr.init(arr);
    }


    Sortr.prototype = {

        insertion: function() {
            
            let arr = this.arr;
            
            for(let i = 1; i < arr.length; i++) {
                if(arr[i] >= arr[i - 1]) {
                    continue;
                } else {
                    let k = i - 1;
                    while(arr[i] > arr[k] && arr[i] < arr[k - 1] || k - 1 === 0) {
                            arr.splice(i, 1);
                            arr.splice(k, 0, arr[i]);
                        k--;
                    }
                }

            }

            return arr;
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