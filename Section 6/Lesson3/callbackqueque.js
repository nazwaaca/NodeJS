const a = () => setTimeout(() => console.log('a'), 500);
const b = () => setTimeout(() => console.log('b'), 2000);
const c = () => console.log('c');

a();
b();
c();