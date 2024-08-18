const square = function (n) {
    return n * n;
}
console.log(square(5));

const squaren = (n) => {
    return n * n;
}
console.log(squaren(2));

const squareshort = n => n * n;
sqobj = squareshort(3);
console.log(sqobj);


const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: false },
    { id: 3, isActive: true },
    { id: 4, isActive: false },
]

const activeJobs = jobs.filter(function (jobs) {
    return jobs.isActive == true;
})

console.log(activeJobs)

const ActiveJobs = jobs.filter(jobs => jobs.isActive == false);
console.log(ActiveJobs);
