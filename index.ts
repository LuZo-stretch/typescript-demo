let reusableVariable: number | string[] = 41;
reusableVariable = ['hello'];

type NumberOrArrayOfStrings = number | string[];
let resusableVariable2: NumberOrArrayOfStrings = 41;
resusableVariable2 = ['adieu'];

type NumberAndStringTupleType = [number, string]
let tupleVariable: NumberAndStringTupleType;
tupleVariable = [1, 'goodbye'];

type Triple = [number, string, string[]];
let tripleVariable: Triple;
tripleVariable = [1, 'whoop', ['first', 'second', 'third']];

enum TShirtSize {
    Small, 
    Medium,
    Large
}

type TShirtSizeAlternative = 'Small' | 'Medium' | 'Large';
let enumType: TShirtSize;
enumType = TShirtSize.Small

let altEnumType: TShirtSizeAlternative;
altEnumType = 'Small';

// EXERCISES ON OUR OWN:

const NumberOfCats: number = 2;
const NameOfCat1: string = "Coco";

const NamesOfCats: string[] = ['Florence', 'Coco']

type NameAndAge = {name: string} & {age: number};
const Cat1: NameAndAge = {
    name: 'Coco',
    age: 8,
};

const Cat2: {name: string; age: number} = {
    name: 'Florence',
    age: 8,
};