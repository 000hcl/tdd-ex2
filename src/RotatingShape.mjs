export class RotatingShape{
    shape;

    constructor(shape) {
        this.shape = shape;
    }

    toString() {
        return this.shape.replace(/ +?/g,'')+'\n';
    }

    rotateRight() {
        const shapeAsString = this.shape.replace(/\s/g,'');
        const arr = shapeAsString.split('');

        const newArr = [];
        newArr.length = 9

        newArr[0] = arr[6];
        newArr[1] = arr[3];
        newArr[2] = arr[0];
        newArr[3] = arr[7];
        newArr[4] = arr[4];
        newArr[5] = arr[1];
        newArr[6] = arr[8];
        newArr[7] = arr[5];
        newArr[8] = arr[2];

        const newStr = newArr.slice(0,3).join('')+'\n'+newArr.slice(3,6).join('')+'\n'+newArr.slice(6,9).join('')+'\n'
        return newStr
    }
}