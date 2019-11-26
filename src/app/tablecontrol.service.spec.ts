import { TestBed } from '@angular/core/testing';

import { TablecontrolService } from './tablecontrol.service';

describe('TablecontrolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TablecontrolService = TestBed.get(TablecontrolService);
    expect(service).toBeTruthy();
  });
});
