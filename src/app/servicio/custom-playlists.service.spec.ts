import { TestBed } from '@angular/core/testing';

import { CustomPlaylistsService } from './custom-playlists.service';

describe('CustomPlaylistsService', () => {
  let service: CustomPlaylistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPlaylistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
