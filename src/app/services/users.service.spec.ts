import { TestBed } from '@angular/core/testing';

describe('UsersService', () => {
  let service: UsersService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
