import { TestBed, inject } from '@angular/core/testing';

import { ComParentChildService } from './com-parent-child.service';

describe('ComParentChildService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComParentChildService]
    });
  });

  it('should be created', inject([ComParentChildService], (service: ComParentChildService) => {
    expect(service).toBeTruthy();
  }));
});
