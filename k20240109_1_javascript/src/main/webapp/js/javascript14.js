const slime = {
	name : '슬라임'
};

const cuteSlime = {
	name : '슬라임',
	attribute : 'cute'
};

const purpleCuteSlime = {
	name : '슬라임',
	attribute : 'cute',
	color : 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log('-------------------------------------------')

//	... -> spread 연산자 -> ECMA6에서 추가 -> 객체의 내용을 다른 객체에 퍼뜨린다. 확산시킨다.

const slime2 = {
	name : '슬라임'
};

const cuteSlime2 = {
	...slime2, // slime2 객체의 내용을 cuteSlime2 객체 내부에 확산시킨다.
	attribute : 'cute'
};


const purpleCuteSlime2 = {
	...cuteSlime2, // cuteSlime2 객체의 내용을 purpleCuteSlime2 객체 내부에 확산시킨다.
	color : 'purple'
};

console.log(slime2);
console.log(cuteSlime2);
console.log(purpleCuteSlime2);
console.log('-------------------------------------------')

//	spread 연산자는 배열에도 사용할 수 있다.
const animal = ['개', '고양이', '참새']
console.log(animal);

const animal2 = animal.concat('비둘기');
console.log(animal2);

const animal3 = [...animal2, '타조']
console.log(animal3);

console.log('------------------------------------------- spread')


































































































