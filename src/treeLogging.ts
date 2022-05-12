import { Person } from "./personTypes";

export function logAllPeopleInTree(topPerson: Person): void {
  // create an empty array peopleNamesStack
  // unshift topPerson to peopleNamesStack[0]
  // loop until peopleNamesStack is empty:
  //     set currentPerson = peopleNamesStack[0]
  //     shift the peopleNamesStack[0] from peopleNamesStack
  //     console log currentPerson.name
  //     unshift each currentPerson.children to peopleNamesStack

  const peopleNamesStack: Person[] = [];
  peopleNamesStack.unshift(topPerson);
  while (peopleNamesStack.length > 0) {
    const currentPerson = peopleNamesStack[0];
    peopleNamesStack.shift();
    console.log(currentPerson.name);
    for (const child of currentPerson.children) {
      peopleNamesStack.unshift(child);
    }
  }
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
  console.log("TODO!  First person is " + topPerson.name);
}
