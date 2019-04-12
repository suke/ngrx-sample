import { AnimeService } from './anime.service'
import { Cours } from '../types/anime'
import { defer } from 'rxjs'
const asyncData = <T>(data: T) => {
  return defer(() => Promise.resolve(data))
}

describe('ValueService', () => {
  let animeService
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    animeService = new AnimeService(httpClientSpy as any)
  })

  it('should return expected cours (HttpClient called once)', () => {
    const expectedCours: Cours = {
      4: {
        id: 4,
        year: 2014,
        cours: 4
      },
      5: {
        id: 5,
        year: 2015,
        cours: 1
      },
      6: {
        id: 6,
        year: 2015,
        cours: 2
      }
    }

    httpClientSpy.get.and.returnValue(asyncData(expectedCours))

    animeService
      .getCours()
      .subscribe(
        cours => expect(cours).toEqual(expectedCours, 'expected heroes'),
        fail
      )
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call')
  })
})
