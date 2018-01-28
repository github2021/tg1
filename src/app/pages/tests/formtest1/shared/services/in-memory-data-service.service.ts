import { InMemoryDbService } from 'angular-in-memory-web-api'

export class InMemHeroService implements InMemoryDbService {
  createDb() {


    let dsus = [
      { id: 1, name: "a", description: "x", cert: "x" },
      { id: 2, name: "b", description: "x", cert: "x" },
      { id: 3, name: "c", description: "x", cert: "x" },
    ];

    let heroes = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Magneta' },
      { id: 4, name: 'Tornado' }
    ];

    let sites = [
      { id: 1, name: "a", description: "x", dsuId: 1 },
      { id: 2, name: "b", description: "x", dsuId: 2 },
      { id: 3, name: "c", description: "x", dsuId: 3 },
    ];


    let users = [
      { id: 0, name: 'bob', type: 'owner' },
      { id: 1, name: 'bob2', type: 'owner2' },
      { id: 2, name: 'bob3', type: 'owner3' },
      { id: 3, name: 'bob4', type: 'owner4' },
      { id: 4, name: 'bob5', type: 'owner5' },
    ]


    return { heroes, dsus, sites, users };
  }
}
