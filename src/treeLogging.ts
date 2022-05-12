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
  // create an empty array peopleNamesQueue
  // put the topPerson onto the back of peopleNamesQueue
  // repeat the following as long as the stack is not empty:
  //     set currentPerson as person at top of peopleNamesQueue
  //     remove the top person from peopleNamesQueue
  //     console log currentPerson.name
  //     add their kids to the back of peopleNamesQueue (in any order)

  const peopleNamesQueue: Person[] = [];
  peopleNamesQueue.push(topPerson);
  while (peopleNamesQueue.length > 0) {
    const currentPerson = peopleNamesQueue[0];
    peopleNamesQueue.shift();
    console.log(currentPerson.name);
    for (const child of currentPerson.children) {
      peopleNamesQueue.push(child);
    }
  }
}
