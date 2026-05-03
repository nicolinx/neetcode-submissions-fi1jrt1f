class MedianFinder {
    constructor() {
        this.minHeap = [];
        this.maxHeap = [];
    }

    left(i) {
        return 2 * i + 1;
    }

    right(i) {
        return 2 * i + 2;
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    insertMinHeap(num) {
        let arr = this.minHeap;

        arr.push(num);
        let i = arr.length - 1;

        while (i > 0 && arr[this.parent(i)] > arr[i]) {
            let p = this.parent(i);
            [arr[p], arr[i]] = [arr[i], arr[p]];
            i = p;
        }
    }

    insertMaxHeap(num) {
        let arr = this.maxHeap;

        arr.push(num);
        let i = arr.length - 1;

        while (i > 0 && arr[this.parent(i)] < arr[i]) {
            let p = this.parent(i);
            [arr[p], arr[i]] = [arr[i], arr[p]];
            i = p;
        }
    }

    extractMax() {
        let arr = this.maxHeap;
        if (arr.length === 1) return arr.pop();

        let max = arr[0];

        arr[0] = arr.pop();
        let i = 0;

        while (this.left(i) < arr.length) {
            let largerChild = this.left(i);
            let r = this.right(i);

            if (r < arr.length && arr[r] > arr[largerChild]) {
                largerChild = r;
            }

            if (arr[largerChild] <= arr[i]) break;

            [arr[largerChild], arr[i]] = [arr[i], arr[largerChild]];
            i = largerChild;
        }

        return max;
    }

    extractMin() {
        let arr = this.minHeap;
        if (arr.length === 1) return arr.pop();

        let max = arr[0];

        arr[0] = arr.pop();
        let i = 0;

        while (this.left(i) < arr.length) {
            let smallerChild = this.left(i);
            let r = this.right(i);

            if (r < arr.length && arr[r] < arr[smallerChild]) {
                smallerChild = r;
            }

            if (arr[smallerChild] >= arr[i]) break;

            [arr[smallerChild], arr[i]] = [arr[i], arr[smallerChild]];
            i = smallerChild;
        }

        return max;
    }

    balanceHeap() {
        if (this.maxHeap.length > this.minHeap.length + 1) {
            this.insertMinHeap(this.extractMax());
        } else if (this.minHeap.length > this.maxHeap.length) {
            this.insertMaxHeap(this.extractMin());
        }
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.maxHeap.length === 0 || num < this.maxHeap[0]) {
            this.insertMaxHeap(num);
        } else {
            this.insertMinHeap(num);
        }

        this.balanceHeap();
    }

    /**
     * @return {number}
     */
    findMedian() {
        console.log(this.maxHeap, this.minHeap);
        if ((this.maxHeap.length + this.minHeap.length) % 2 !== 0) {
            return this.maxHeap[0];
        } else {
            return (this.maxHeap[0] + this.minHeap[0]) / 2;
        }
    }
}
