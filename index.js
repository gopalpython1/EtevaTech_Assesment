function findUniqueUsers(list1, list2) {
    const uniqueList1 = new Set(list1);
    const uniqueList2 = new Set(list2);

    const uniqueList1Users = new Set([...uniqueList1].filter(each => !uniqueList2.has(each)));

    const uniqueList2Users = new Set([...uniqueList2].filter(each => !uniqueList1.has(each)));

    const intersection = new Set([...uniqueList1].filter(each => uniqueList2.has(each)));

    return {
        uniqueList1Users: Array.from(uniqueList1Users),
        uniqueList2Users: Array.from(uniqueList2Users),
        intersection: Array.from(intersection)
    };
}

const list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

const finalResult = findUniqueUsers(list1, list2);
console.log(finalResult.uniqueList1Users);
console.log(finalResult.uniqueList2Users);
console.log(finalResult.intersection);
