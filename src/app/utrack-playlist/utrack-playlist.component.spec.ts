import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtrackPlaylistComponent } from './utrack-playlist.component';

describe('UtrackPlaylistComponent', () => {
  let component: UtrackPlaylistComponent;
  let fixture: ComponentFixture<UtrackPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UtrackPlaylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtrackPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
