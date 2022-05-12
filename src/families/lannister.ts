import { Person } from "../personTypes";

export function createLannisterTree(): Person {
  //https://en.wikipedia.org/wiki/Template:Family_tree_of_Tytos_Lannister
  const cerseiKids: Person[] = [
    { name: "Tommen", children: [] },
    { name: "Mycella", children: [] },
    { name: "Joffrey", children: [] },
  ];

  const tywinKids: Person[] = [
    { name: "Tyrion", children: [] },
    { name: "Ser Jaime", children: [] },
    { name: "Cersei", children: cerseiKids },
  ];

  const tytosKids: Person[] = [
    { name: "Gerion", children: [] },
    { name: "Tygett", children: [] },
    { name: "Kevan", children: [] },
    { name: "Genna", children: [] },
    { name: "Tywin", children: tywinKids },
  ];

  const topLannister: Person = { name: "Tytos", children: tytosKids };

  return topLannister;
}
