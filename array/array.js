// const array = ['Andres', 'Daniela', 'Karen'];
// console.log(array);
// array.push('Sergio');
// console.log(array);

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    get(index) {
        return this.data[index];
    }
    // Agrega un elemento al final del array
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    //Borra el último elemento del array
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    // Borra el elemento seleccionado del array
    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }
    // Disminuye el index
    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];            
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    //Borra el primer elemento del array
    shift() {
        this.delete(0);
    }
    // Agrega un elemento al principio del array
    unShift(item) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        this.length++;
        return this.data;
    }
}

const myArray = new MyArray();
myArray.push('Andres');
myArray.push('Daniela');
myArray.push('Adriana');

myArray.pop();
myArray.delete(1);