import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListItem } from '../../list-container.component';
import { ItemComponent } from './item.component';
import { ListItemModule } from '../../list-item.module';

@Component({
  template: ` <builder-list-item [config]="config"></builder-list-item>> `,
})
export class ListItemWrapperComponent {
  config: ListItem = { id: '11', title: '22', actions: [] };
}

describe('ItemComponent', () => {
  let component: ListItemWrapperComponent;
  let fixture: ComponentFixture<ListItemWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListItemWrapperComponent],
      imports: [ListItemModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ListItemWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
