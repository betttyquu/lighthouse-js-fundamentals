var students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 }
];
 
// sort alphabetically
// if same 
// compare age
// compare students name

students.sort(function(a,b){
    var aName = a.name;
    var bName = b.name;
    if (aName < bName) {
        return -1;
    }
    if (aName > bName) {
        return 1;
    }
    if (aName = bName) {
        return b.age - a.age
    }
})
console.log(students);