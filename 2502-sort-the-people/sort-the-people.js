/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let people = [];

    for (let i = 0; i < names.length; i++) {
        people.push({
            name: names[i],
            height: heights[i]
        });
    }

    people.sort((a, b) => b.height - a.height);

    let result = [];

    for (let person of people) {
        result.push(person.name);
    }

    return result;
};