const address = {
    street: "lane",
    city: "Yoganda",
    country: "Kenia",
};

const { street, city, country } = address;
const { street: st } = address;
const { city: ci } = address;
const { country: coun } = address;

const addresses = [
    { street: '123 Main St', city: 'Anytown', country: 'USA' },
    { street: '456 Maple Ave', city: 'Othertown', country: 'Canada' },
    { street: '789 Oak Blvd', city: 'Elsewhere', country: 'UK' }
];

const sta = addresses.map(
    (ele) => `<i>${ele.street}, ${ele.city} , ${ele.country}</i>`
);
console.log(sta)
// console.log(`<i>${st}, ${ci} , ${coun}</i>`);
