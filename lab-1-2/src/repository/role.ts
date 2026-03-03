import type { Person } from "../types/person";

let people: Person[] = [];

export const roleRepo = {
  getPeople() {
    return people;
  },

  createPerson(person: Person) {
    people.push(person);
    return person;
  },
};
