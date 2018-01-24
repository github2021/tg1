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
    ]


    return { heroes, dsus, sites };
  }
}
