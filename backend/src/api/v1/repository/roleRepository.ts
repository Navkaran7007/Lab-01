import type { Person } from "../types/person";

let people: Person[] = [];

export const roleRepository = {
  getPeople(): Person[] {
    return people;
  },

  createPerson(person: Person): Person {
    people.push(person);
    return person;
  },
};
