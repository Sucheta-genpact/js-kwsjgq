

let acctData = [
  {
    acctNum: "AAA - 1234",
    user: "Alice"
  },
  {
    acctNum: "AAA - 5231",
    user: "Bob"
  },
  {
    acctNum: "AAA - 9921",
    user: "Alice"
  },
  {
    acctNum: "AAA - 8191",
    user: "Alice"
  }
];
let balance = {
  "AAA - 1234": 4593.22,
  "AAA - 9921": 0,
  "AAA - 5231": 232142.5,
  "AAA - 8191": 4344
};

function returnAccnumbers(user = null, sortBy = null, sortDirection = null) {
  // transform each object with balance in array
  let result = acctData.map(obj => ({
    ...obj,
    balance: balance[obj["acctNum"]]
  }));

  // if user exists filter by user
  if (user) {
    result = result.filter(obj => {
      return obj.user == user;
    });
    if (!result.length) {
      let msg = "Could not found user" + " " + user;
      return msg;
    }
  }

  if (sortBy) {
    // inner function to compare
    function compare(a, b) {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    }
    result = result.sort(compare);
  }

  if (sortDirection && sortDirection == "asc") {
    result = result.sort((a, b) => a - b); // For asc sort
  }

  if (sortDirection && sortDirection == "desc") {
    numArray.sort((a, b) => b - a); // For descending sort
  }

  return result.map(obj => obj.acctNum);
}

let filterByBob = returnAccnumbers("Bob");
let filterByCharlie = returnAccnumbers("charlie");
let sortByAcc = returnAccnumbers(null, "acctNum");
let filterAliceSortBalDirectAsc = returnAccnumbers("Alice", "balance", "asc");

console.log("filter by Bob", filterByBob);
console.log("filter by charlie", filterByCharlie);
console.log("sort by acc", sortByAcc);
console.log(
  "filter by Alice && Sort by Balance && sort Direction Asc",
  filterAliceSortBalDirectAsc
);
