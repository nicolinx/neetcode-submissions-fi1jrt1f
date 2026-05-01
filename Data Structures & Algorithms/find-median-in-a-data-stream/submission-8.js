class MedianFinder {
    constructor() {
        this.maxHeap = [];
        this.minHeap = [];
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

    extractMax() {
        let arr = this.maxHeap;
        if (arr.length === 1) return arr.pop();

        const root = arr[0];
        arr[0] = arr.pop();

        let i = 0;
        while (this.left(i) < arr.length) {
            let largerChild = this.left(i);
            let r = this.right(i);

            if (r < arr.length && arr[r] > arr[largerChild]) {
                largerChild = r;
            }

            if (arr[i] >= arr[largerChild]) break;

            [arr[i], arr[largerChild]] = [arr[largerChild], arr[i]];
            i = largerChild;
        }
        return root;
    }

    extractMin() {
        let arr = this.minHeap;
        if (arr.length === 1) return arr.pop();

        const root = arr[0];
        arr[0] = arr.pop();

        let i = 0;
        while (this.left(i) < arr.length) {
            let smallerChild = this.left(i);
            let r = this.right(i);

            if (r < arr.length && arr[r] < arr[smallerChild]) {
                smallerChild = r;
            }

            if (arr[i] <= arr[smallerChild]) break;

            [arr[i], arr[smallerChild]] = [arr[smallerChild], arr[i]];
            i = smallerChild;
        }
        return root;
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
        console.log("before balance", this.maxHeap, this.minHeap);
        this.balanceHeap();
        console.log("after balance", this.maxHeap, this.minHeap);
    }

    /**
     * @return {number}
     */
    findMedian() {
        let total = this.maxHeap.length + this.minHeap.length;
        if (total % 2 !== 0) return this.maxHeap[0];
        else return (this.maxHeap[0] + this.minHeap[0]) / 2;
    }
}
