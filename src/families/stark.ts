import { Person } from "../personTypes";

export function createStarkTree(): Person {
  const eddardKids: Person[] = [
    { name: "Rickon", children: [] },
    { name: "Bran", children: [] },
    { name: "Arya", children: [] },
    { name: "Sansa", children: [] },
    { name: "Robb", children: [] },
    { name: "Jon", children: [] },
  ];

  const rickardsKids: Person[] = [
    { name: "Benjen", children: [] },
    { name: "Lyanna", children: [] },
    { name: "Brandon", children: [] },
    { name: "Eddard", children: eddardKids },
  ];

  const topStark: Person = { name: "Rickard", children: rickardsKids };

  return topStark;
}
