const companies = [
    {Name : "Facebook", category: "Technology", lasted: "2000-2055"},
    {Name : "Netflix", category: "Entertainment", lasted: "2011-2045"},
    {Name : "Big-Ben", category: "Food", lasted: "2013-2015"},
    {Name : "Tinda", category: "Export", lasted: "2020-2040"},
    {Name : "Tesla", category: "Automobile", lasted: "2018-2030"}
]

const ages = [12, 15, 18, 28, 35, 40, 55, 67];

for (let i=0; i<companies.length; i++){
    console.log(companies[i])
}

// companies.forEach(e => console.log(e.Name))

// const canDrink = ages.filter(e => e >=18)


// const testMap = companies.map(e => `${e.Name} [${e.lasted}]`);
// let sumAges =  ages.reduce( (total, age) => total +age, 0);



// function Addition (a,b){
//     let result = a+ b;
//     return result
// }

// console.log(Addition(1,2))

