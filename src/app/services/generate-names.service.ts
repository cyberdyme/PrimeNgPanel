import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface CustomerItem {
  first: string;
  last: string;
}

export interface CustomerInfo {
  _id: string;
  fullName?: string;
  name?: CustomerItem;
  company?: string;
}

@Injectable({
  providedIn: 'root'
})
export class GenerateNamesService {
  private data = [
    {
      '_id': '5c695fbba2708a1cd416a28c',
      'name': {
        'first': 'Hampton',
        'last': 'Osborne'
      },
      'company': 'LIQUIDOC'
    },
    {
      '_id': '5c695fbb8d1c940089710e9f',
      'name': {
        'first': 'Sheila',
        'last': 'Bryan'
      },
      'company': 'CYTREX'
    },
    {
      '_id': '5c695fbb1478f1cb852d7225',
      'name': {
        'first': 'Glover',
        'last': 'Fletcher'
      },
      'company': 'DAISU'
    },
    {
      '_id': '5c695fbbbde45cbeded9c6ac',
      'name': {
        'first': 'Robert',
        'last': 'Guzman'
      },
      'company': 'SUNCLIPSE'
    },
    {
      '_id': '5c695fbba869c8f4139b2eaa',
      'name': {
        'first': 'Evans',
        'last': 'Price'
      },
      'company': 'BUZZNESS'
    },
    {
      '_id': '5c695fbb084349cf8c257ee3',
      'name': {
        'first': 'Williams',
        'last': 'Burks'
      },
      'company': 'SURETECH'
    },
    {
      '_id': '5c695fbb44d032014a7fca29',
      'name': {
        'first': 'Lina',
        'last': 'Mccoy'
      },
      'company': 'TECHADE'
    },
    {
      '_id': '5c695fbb9d86dffb7b445bc7',
      'name': {
        'first': 'Riggs',
        'last': 'Lang'
      },
      'company': 'EARTHWAX'
    },
    {
      '_id': '5c695fbb3d6ae0a2549b813d',
      'name': {
        'first': 'Letitia',
        'last': 'Jarvis'
      },
      'company': 'HIVEDOM'
    },
    {
      '_id': '5c695fbb00f30c2e987dcd3d',
      'name': {
        'first': 'Ana',
        'last': 'Rose'
      },
      'company': 'SPACEWAX'
    },
    {
      '_id': '5c695fbbe6d98e26e7debc96',
      'name': {
        'first': 'Leonard',
        'last': 'Guthrie'
      },
      'company': 'CALCU'
    },
    {
      '_id': '5c695fbbdf3f1afb4be95f03',
      'name': {
        'first': 'Shepard',
        'last': 'Stevenson'
      },
      'company': 'COMDOM'
    },
    {
      '_id': '5c695fbba09b0c748c8345e6',
      'name': {
        'first': 'Rosetta',
        'last': 'Robertson'
      },
      'company': 'TERAPRENE'
    },
    {
      '_id': '5c695fbb1f8ab6d4baad279d',
      'name': {
        'first': 'Gretchen',
        'last': 'Oneill'
      },
      'company': 'ZEAM'
    },
    {
      '_id': '5c695fbbab155922c485be0f',
      'name': {
        'first': 'Weber',
        'last': 'Mclaughlin'
      },
      'company': 'PLUTORQUE'
    },
    {
      '_id': '5c695fbb6265bfd9df712544',
      'name': {
        'first': 'Brittney',
        'last': 'Riggs'
      },
      'company': 'TERRAGO'
    },
    {
      '_id': '5c695fbba608c9934b520478',
      'name': {
        'first': 'Dillard',
        'last': 'Cervantes'
      },
      'company': 'VORTEXACO'
    },
    {
      '_id': '5c695fbbdd3b56958407019f',
      'name': {
        'first': 'Nichole',
        'last': 'Alston'
      },
      'company': 'PAPRICUT'
    },
    {
      '_id': '5c695fbb4acf57dd8035d415',
      'name': {
        'first': 'Duffy',
        'last': 'Chavez'
      },
      'company': 'SYNKGEN'
    },
    {
      '_id': '5c695fbb0aa653793d61a42e',
      'name': {
        'first': 'Earlene',
        'last': 'Mccullough'
      },
      'company': 'GAPTEC'
    },
    {
      '_id': '5c695fbb1319a44ebd82c2dc',
      'name': {
        'first': 'Robbie',
        'last': 'Combs'
      },
      'company': 'HONOTRON'
    },
    {
      '_id': '5c695fbbb4002eed69b8fa14',
      'name': {
        'first': 'Juliette',
        'last': 'Bird'
      },
      'company': 'ELEMANTRA'
    },
    {
      '_id': '5c695fbbe875c744f5b20fd8',
      'name': {
        'first': 'Munoz',
        'last': 'Fowler'
      },
      'company': 'QUADEEBO'
    },
    {
      '_id': '5c695fbbe00e34abfa4896eb',
      'name': {
        'first': 'Richardson',
        'last': 'Lott'
      },
      'company': 'SUREMAX'
    },
    {
      '_id': '5c695fbb871ad1ee93ff1103',
      'name': {
        'first': 'Lamb',
        'last': 'Reeves'
      },
      'company': 'OPTYK'
    },
    {
      '_id': '5c695fbb0e5c6927e572b537',
      'name': {
        'first': 'Ayers',
        'last': 'Hines'
      },
      'company': 'BLANET'
    },
    {
      '_id': '5c695fbb852c1f58b452dad7',
      'name': {
        'first': 'Crystal',
        'last': 'Carson'
      },
      'company': 'GENESYNK'
    },
    {
      '_id': '5c695fbbb18c0361135f9547',
      'name': {
        'first': 'Milagros',
        'last': 'Pollard'
      },
      'company': 'ACUMENTOR'
    },
    {
      '_id': '5c695fbb9ca2a2c5168bcfa5',
      'name': {
        'first': 'Carol',
        'last': 'Payne'
      },
      'company': 'ACUSAGE'
    },
    {
      '_id': '5c695fbb02a4efbea8e8f19b',
      'name': {
        'first': 'Francis',
        'last': 'Casey'
      },
      'company': 'ENAUT'
    },
    {
      '_id': '5c695fbb8780fafd89c9a1ea',
      'name': {
        'first': 'Gill',
        'last': 'Mendez'
      },
      'company': 'PEARLESSA'
    },
    {
      '_id': '5c695fbb0e7a2309115b385f',
      'name': {
        'first': 'Marina',
        'last': 'Wilkinson'
      },
      'company': 'NIMON'
    },
    {
      '_id': '5c695fbb44c911ee2cd75a0f',
      'name': {
        'first': 'Pope',
        'last': 'Dodson'
      },
      'company': 'ZOARERE'
    },
    {
      '_id': '5c695fbb5d450b55bc13e1ea',
      'name': {
        'first': 'Drake',
        'last': 'Best'
      },
      'company': 'AQUACINE'
    },
    {
      '_id': '5c695fbb6bdb00528cc46abf',
      'name': {
        'first': 'Elinor',
        'last': 'Caldwell'
      },
      'company': 'INSECTUS'
    },
    {
      '_id': '5c695fbbc5c0d91f2fc857a4',
      'name': {
        'first': 'Carissa',
        'last': 'Camacho'
      },
      'company': 'FLEETMIX'
    },
    {
      '_id': '5c695fbbf6863b02bd970b19',
      'name': {
        'first': 'Patterson',
        'last': 'Parrish'
      },
      'company': 'ASSURITY'
    },
    {
      '_id': '5c695fbb46b4f553b495a070',
      'name': {
        'first': 'Corina',
        'last': 'Drake'
      },
      'company': 'SENTIA'
    },
    {
      '_id': '5c695fbbaa3e37f2d0265814',
      'name': {
        'first': 'Galloway',
        'last': 'Riddle'
      },
      'company': 'CODAX'
    },
    {
      '_id': '5c695fbb435ee80a028e9f8b',
      'name': {
        'first': 'Staci',
        'last': 'Mitchell'
      },
      'company': 'ZANILLA'
    },
    {
      '_id': '5c695fbb201212e80656a6e3',
      'name': {
        'first': 'Atkinson',
        'last': 'Branch'
      },
      'company': 'WAZZU'
    },
    {
      '_id': '5c695fbb2e4607355a9177df',
      'name': {
        'first': 'Hoover',
        'last': 'Sweet'
      },
      'company': 'GEEKOLOGY'
    },
    {
      '_id': '5c695fbbcf9fb39c11a8abae',
      'name': {
        'first': 'White',
        'last': 'Williams'
      },
      'company': 'DADABASE'
    },
    {
      '_id': '5c695fbb81c53a5b0a2d42cb',
      'name': {
        'first': 'Johnson',
        'last': 'Dillon'
      },
      'company': 'PLASMOSIS'
    },
    {
      '_id': '5c695fbb6a0c5680d6794fb7',
      'name': {
        'first': 'Acosta',
        'last': 'Mcclain'
      },
      'company': 'IMANT'
    },
    {
      '_id': '5c695fbb470df146171b3bd6',
      'name': {
        'first': 'Stout',
        'last': 'Howell'
      },
      'company': 'FROSNEX'
    },
    {
      '_id': '5c695fbb97be976a564e19fe',
      'name': {
        'first': 'Mejia',
        'last': 'King'
      },
      'company': 'OPPORTECH'
    },
    {
      '_id': '5c695fbbd988e5b88d619118',
      'name': {
        'first': 'Strickland',
        'last': 'Thompson'
      },
      'company': 'MAXIMIND'
    },
    {
      '_id': '5c695fbb286ba7e5adfde9e4',
      'name': {
        'first': 'Mack',
        'last': 'Carter'
      },
      'company': 'KIOSK'
    },
    {
      '_id': '5c695fbb428143df04c14ef6',
      'name': {
        'first': 'Morgan',
        'last': 'Delacruz'
      },
      'company': 'PYRAMIS'
    },
    {
      '_id': '5c695fbb4f871b8dce918087',
      'name': {
        'first': 'Crosby',
        'last': 'Booth'
      },
      'company': 'TRASOLA'
    },
    {
      '_id': '5c695fbbe20fe28ea2b46fc2',
      'name': {
        'first': 'Lela',
        'last': 'Cherry'
      },
      'company': 'ELECTONIC'
    },
    {
      '_id': '5c695fbbdc6d12107ae6987f',
      'name': {
        'first': 'Snyder',
        'last': 'Fernandez'
      },
      'company': 'SILODYNE'
    },
    {
      '_id': '5c695fbb896bd317ac3232d4',
      'name': {
        'first': 'Graves',
        'last': 'Maddox'
      },
      'company': 'KEGULAR'
    },
    {
      '_id': '5c695fbb4d6bb25a24d211a9',
      'name': {
        'first': 'Paulette',
        'last': 'Newman'
      },
      'company': 'ENERSAVE'
    },
    {
      '_id': '5c695fbb114c1507493778d9',
      'name': {
        'first': 'Wiley',
        'last': 'Lynch'
      },
      'company': 'MARQET'
    },
    {
      '_id': '5c695fbbff86bf2e1cbc771d',
      'name': {
        'first': 'Mcmillan',
        'last': 'Thomas'
      },
      'company': 'WATERBABY'
    },
    {
      '_id': '5c695fbbaf453e74e6f45daf',
      'name': {
        'first': 'Faith',
        'last': 'Rosa'
      },
      'company': 'UNI'
    },
    {
      '_id': '5c695fbbc5e0418d7296f13e',
      'name': {
        'first': 'Jami',
        'last': 'Browning'
      },
      'company': 'KNEEDLES'
    },
    {
      '_id': '5c695fbbd54f229c7709b8d0',
      'name': {
        'first': 'Langley',
        'last': 'Roman'
      },
      'company': 'KNOWLYSIS'
    },
    {
      '_id': '5c695fbb2f065db8b8580234',
      'name': {
        'first': 'Helen',
        'last': 'Daugherty'
      },
      'company': 'FILODYNE'
    },
    {
      '_id': '5c695fbbca27115a944c464e',
      'name': {
        'first': 'Jannie',
        'last': 'Mckinney'
      },
      'company': 'VIAGRAND'
    },
    {
      '_id': '5c695fbbac843597ad03cfaa',
      'name': {
        'first': 'Knowles',
        'last': 'Alvarado'
      },
      'company': 'QUIZMO'
    },
    {
      '_id': '5c695fbb46d33ae56839e5c3',
      'name': {
        'first': 'Darcy',
        'last': 'Hernandez'
      },
      'company': 'THREDZ'
    },
    {
      '_id': '5c695fbb4336fa8fee4c34da',
      'name': {
        'first': 'Gladys',
        'last': 'Keller'
      },
      'company': 'CAXT'
    },
    {
      '_id': '5c695fbb53da1cce5d16aaaa',
      'name': {
        'first': 'Randi',
        'last': 'Vang'
      },
      'company': 'DYMI'
    },
    {
      '_id': '5c695fbb3b0f680fa4bc19e1',
      'name': {
        'first': 'Pamela',
        'last': 'Hess'
      },
      'company': 'CRUSTATIA'
    },
    {
      '_id': '5c695fbbd69c2357e1a3f979',
      'name': {
        'first': 'Grant',
        'last': 'Hughes'
      },
      'company': 'TUBESYS'
    },
    {
      '_id': '5c695fbb0ff6d7930d43fc98',
      'name': {
        'first': 'Kelly',
        'last': 'Malone'
      },
      'company': 'ANARCO'
    },
    {
      '_id': '5c695fbb610145526ce6ad6d',
      'name': {
        'first': 'Hubbard',
        'last': 'Lowe'
      },
      'company': 'POLARIUM'
    },
    {
      '_id': '5c695fbb02a9696db2d8a2db',
      'name': {
        'first': 'Rosemary',
        'last': 'Terrell'
      },
      'company': 'UBERLUX'
    },
    {
      '_id': '5c695fbbc2fea024390898b1',
      'name': {
        'first': 'Wall',
        'last': 'Allison'
      },
      'company': 'BITTOR'
    },
    {
      '_id': '5c695fbb6274611e519d9bfd',
      'name': {
        'first': 'Hammond',
        'last': 'Watts'
      },
      'company': 'BITENDREX'
    },
    {
      '_id': '5c695fbbe1d76eb609e90681',
      'name': {
        'first': 'Butler',
        'last': 'Kent'
      },
      'company': 'GEEKFARM'
    },
    {
      '_id': '5c695fbbabaf1e9e11e8ca5c',
      'name': {
        'first': 'Day',
        'last': 'Joseph'
      },
      'company': 'OHMNET'
    },
    {
      '_id': '5c695fbba51cb81d2baa6dfa',
      'name': {
        'first': 'Espinoza',
        'last': 'Baird'
      },
      'company': 'BOILICON'
    },
    {
      '_id': '5c695fbbe786892683a25d02',
      'name': {
        'first': 'Pitts',
        'last': 'Huber'
      },
      'company': 'INQUALA'
    },
    {
      '_id': '5c695fbbf8ed38de38bc0748',
      'name': {
        'first': 'Carlson',
        'last': 'Harmon'
      },
      'company': 'APPLIDECK'
    },
    {
      '_id': '5c695fbb80fca9659a1d8160',
      'name': {
        'first': 'Valerie',
        'last': 'Reilly'
      },
      'company': 'GOLOGY'
    },
    {
      '_id': '5c695fbbe016352c3c31b8f3',
      'name': {
        'first': 'Tyler',
        'last': 'Noble'
      },
      'company': 'VITRICOMP'
    },
    {
      '_id': '5c695fbb2634f3fc97f88c11',
      'name': {
        'first': 'Snider',
        'last': 'Duffy'
      },
      'company': 'ZIORE'
    },
    {
      '_id': '5c695fbb28714a160ca58d67',
      'name': {
        'first': 'Colleen',
        'last': 'Morris'
      },
      'company': 'DANJA'
    },
    {
      '_id': '5c695fbb77b0ecfcac86bc05',
      'name': {
        'first': 'Effie',
        'last': 'Herman'
      },
      'company': 'MAXEMIA'
    },
    {
      '_id': '5c695fbb69c99f73838951a7',
      'name': {
        'first': 'Nichols',
        'last': 'Alexander'
      },
      'company': 'GONKLE'
    },
    {
      '_id': '5c695fbb275a8338284877a2',
      'name': {
        'first': 'Valeria',
        'last': 'Vega'
      },
      'company': 'QUAILCOM'
    },
    {
      '_id': '5c695fbb687ec8c3ed4fd7e0',
      'name': {
        'first': 'Oneil',
        'last': 'Norris'
      },
      'company': 'ANIVET'
    },
    {
      '_id': '5c695fbb1e68e9c1f3e8888f',
      'name': {
        'first': 'Sophia',
        'last': 'Moon'
      },
      'company': 'ECOSYS'
    },
    {
      '_id': '5c695fbb2f4b32e28fc95f51',
      'name': {
        'first': 'Kristine',
        'last': 'Mcpherson'
      },
      'company': 'ZILLA'
    },
    {
      '_id': '5c695fbbbb7f8af78229b5dd',
      'name': {
        'first': 'Franco',
        'last': 'Hoffman'
      },
      'company': 'XPLOR'
    },
    {
      '_id': '5c695fbba66d8d5f9b207a32',
      'name': {
        'first': 'Angelique',
        'last': 'Mccall'
      },
      'company': 'VIASIA'
    },
    {
      '_id': '5c695fbb3e331d4db8789f2f',
      'name': {
        'first': 'Curtis',
        'last': 'Sharp'
      },
      'company': 'NAXDIS'
    },
    {
      '_id': '5c695fbb847352c67de7cfde',
      'name': {
        'first': 'Cantrell',
        'last': 'Steele'
      },
      'company': 'VENOFLEX'
    },
    {
      '_id': '5c695fbb0fc759b8629a1aaf',
      'name': {
        'first': 'Lenora',
        'last': 'Webb'
      },
      'company': 'ISOSPHERE'
    },
    {
      '_id': '5c695fbbf5ce2b81d0dbc47b',
      'name': {
        'first': 'Mathews',
        'last': 'Rasmussen'
      },
      'company': 'QUARMONY'
    },
    {
      '_id': '5c695fbbe4142ea0eb3711b8',
      'name': {
        'first': 'Richards',
        'last': 'Slater'
      },
      'company': 'ZENTHALL'
    },
    {
      '_id': '5c695fbb8128a62e311529b6',
      'name': {
        'first': 'Bolton',
        'last': 'Armstrong'
      },
      'company': 'VELOS'
    },
    {
      '_id': '5c695fbb683be6dee6e06871',
      'name': {
        'first': 'Lucile',
        'last': 'Phelps'
      },
      'company': 'VERTIDE'
    },
    {
      '_id': '5c695fbbddb3513466f34a3b',
      'name': {
        'first': 'Nicholson',
        'last': 'Evans'
      },
      'company': 'VERTON'
    },
    {
      '_id': '5c695fbba5b4ad86e39d80e3',
      'name': {
        'first': 'Ashley',
        'last': 'Bates'
      },
      'company': 'NURPLEX'
    }
  ];

  constructor(private http: HttpClient) { }

  /*
  public getCustomers(query: string): Observable<CustomerInfo[]> {
    return of(this.data.filter(x =>
      x.name.first.includes(query) || x.name.last.includes(query)));
  }

  public getOtherCustomers(query: string): Observable<CustomerInfo[]> {

    return this.getCustomers(query).pipe(delay(4000));
  }
  */

  public getData(query: string): Observable<CustomerInfo[]> {
    return this.http.get<CustomerInfo[]>('http://localhost:3000/customers')
    .pipe(
      map((x: CustomerInfo[]) => this.filterItems(x, query)),
      tap((x: CustomerInfo[]) => this.generateNames(x))
    );
  }

  private filterItems(items: CustomerInfo[], query: string): CustomerInfo[] {
    console.log('QUERY', query);
    return items.filter(x => x.name.first.includes(query) || x.name.last.includes(query));
  }

  private generateNames(items: CustomerInfo[]): CustomerInfo[] {
    items.forEach(x => x.fullName = `${x.name.first} ${x.name.last}`);
    return items;
  }
}
