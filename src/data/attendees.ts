import { faker } from "@faker-js/faker";

export const attendees = Array.from({ length: 200 }).map(() => {
  return {
    id: faker.number.int({ min: 10000, max: 20000 }),
    name: faker.person.fullName(),
    email: faker.internet.email().toLocaleLowerCase(),
    createdAt: new Date(faker.date.recent({ days: 30 })), // Convert createdAt to Date object
    checkedInAt: new Date(faker.date.recent({ days: 7 })) // Convert checkedInAt to Date object
  };
});

// Order attendees by createdAt from most recent to oldest
attendees.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()); 