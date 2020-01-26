(function(global){

    const Sortr = function(arr) {
        return new Sortr.init(arr);
    }


    Sortr.prototype = {

        insertion: function(order) {

            const arr = this.arr;

            if (order === 'descend') {

                for (let i = 1; i < arr.length; i++) {

                    let current = arr[i];

                    if (current < arr[i - 1]) {
                        continue;
                    } else {

                        let prev = i - 1;

                        while (prev >= 0 && arr[prev] < current) {
                            arr[prev + 1] = arr[prev];
                            prev--;
                        }

                        arr[prev + 1] = current;
                    }

                }

            } else {

                for (let i = 1; i < arr.length; i++) {

                    let current = arr[i];

                    if (current >= arr[i - 1]) {
                        continue;
                    } else {

                        let prev = i - 1;

                        while (prev >= 0 && arr[prev] > current) {
                            arr[prev + 1] = arr[prev];
                            prev--;
                        }

                        arr[prev + 1] = current;

                    }

                }

            }

            return arr;
        },

        bubble: function(order) {

            const arr = this.arr;
            let sorted;

            if (order === 'descend') {
                do {
                    sorted = true;

                    for (let current = 0; current < arr.length; current++) {

                        if (arr[current] < arr[current + 1]) {
                            [arr[current], arr[current + 1]] = [arr[current + 1], arr[current]];
                            sorted = false;
                        }

                    }
                    
                } while (!sorted);

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
        },

        selection: function(order) {

            const arr = this.arr;

            if (order === 'descend') {

                for (let currentIndex = 0; currentIndex < arr.length; currentIndex++) {

                    let biggestIndex = currentIndex;
                    let counter = currentIndex;

                    while (counter <= arr.length) {

                        if (arr[counter] > arr[biggestIndex]) {
                            biggestIndex = counter;
                        }

                        counter++;

                    }

                    [arr[currentIndex], arr[biggestIndex]] = [arr[biggestIndex], arr[currentIndex]];
                }

            } else {

                for (let currentIndex = 0; currentIndex < arr.length; currentIndex++) {
                    
                    let smallestIndex = currentIndex;
                    let counter = currentIndex;

                    while (counter <= arr.length) {

                        if (arr[counter] < arr[smallestIndex]) {
                            smallestIndex = counter;
                        }

                        counter++;
                    }

                    [arr[currentIndex], arr[smallestIndex]] = [arr[smallestIndex], arr[currentIndex]];
                }

            }

            return arr;
        },

        merge: function(order) {
            
            const arr = this.arr;

            return merge(arr, order);

            function merge(arr, order) {

                let left = arr.slice(0, Math.ceil(arr.length / 2));
                let right = arr.slice(Math.ceil(arr.length / 2));

                if (left.length > 1) {
                    left = merge(left, order);
                }

                if (right.length > 1) {
                    right = merge(right, order);
                }

                let mergedArr = [];

                if (order === 'descend') {

                    while (left.length !== 0 && right.length !== 0) {
                        
                        if(left[0] >= right[0]) {
                            mergedArr.push(left.shift());
                        } else {
                            mergedArr.push(right.shift())
                        }

                    }
                    
                } else {

                    while (left.length !== 0 && right.length !== 0) {

                        if (left[0] <= right[0]) {
                            mergedArr.push(left.shift());
                        } else {
                            mergedArr.push(right.shift());
                        }

                    }

                }  
                
                if (left.length === 0) {
                    mergedArr = mergedArr.concat(right);
                } else {
                    mergedArr = mergedArr.concat(left);
                }

                return mergedArr;

            }       
        }
    }


    Sortr.init = function(arr) {

        this.arr = arr.slice();

    }

    Sortr.init.prototype = Sortr.prototype;

    global.Sortr = global.S$ = Sortr;

}(window));