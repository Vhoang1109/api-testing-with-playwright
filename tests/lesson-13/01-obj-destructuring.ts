// const myClass = {
//     school: "ABC School",   
//     course: "Fullstack QA",

// };
// // // moi 1 thuoc tinh mat 1 dong code de lay ra gia tri cua no
// // const school = myClass.school;
// // const course = myClass.course;

// // tat ca cac thuoc tinh chi ton dung 1 dong
// // khi viet nhu vay ts se hieu minh dang lam 2 viec, 1 la khai bao bien school, course, 2 la gan gia tri
// const { school, course } = myClass; // => destructuring
// console.log(school); // => ABC School
// console.log(course); // => Fullstack QA




const Student = {
    studentName: "John Doe",
    address: "123 Main St",
};
const { studentName, address } = Student;
console.log(studentName);
console.log(address);