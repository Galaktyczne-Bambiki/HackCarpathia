import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Lightbox, LightboxModule } from 'ngx-lightbox';

export type Mode = 'list' | 'map';

export type TableData = {
  position: number;
  image: string;
  description: string;
};

@Component({
  standalone: true,
  selector: 'app-dangerous-places',
  templateUrl: './dangerous-places.component.html',
  styleUrls: ['./dangerous-places.component.scss'],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTableModule,
    LightboxModule,
  ],
})
export class DangerousPlacesComponent {
  private lightbox = inject(Lightbox);
  public mode = signal<Mode>('list');
  data = signal<TableData[]>([
    {
      position: 1,
      description: 'Uwaga,kostka brukowa!',
      image:
        'https://bi.im-g.pl/im/86/20/ce/z13508742AMP,Odslonieta-podczas-remontu-ul--Piotrkowskiej-stara.jpg',
    },
    {
      position: 2,
      description: 'Remont ulicy Lenartowicza',
      image: 'https://www.radio90.pl/files/2022/06/remont-drog_ogolne.jpg',
    },
    {
      position: 3,
      description: 'Utrudnienia w ruchu na Placu Zamkowym',
      image:
        'https://bi.im-g.pl/im/5a/11/1b/z28382554AMP,Remonty-drog-w-powiecie-swiebodzinskim-.jpg',
    },
    {
      position: 4,
      description: 'Zamknięte ulice z powodu maratonu!',
      image:
        'https://d-art.ppstatic.pl/kadry/k/r/1/57/47/55ceb28fb238f_o_large.jpg',
    },
  ]);

  dataSource = this.data();
  displayedColumns: string[] = ['position', 'description', 'image'];

  open(image: string, description: string): void {
    this.lightbox.open(
      [
        {
          src: image,
          caption: description,
          thumb: image,
        },
      ],
      0
    );
  }

  close(): void {
    this.lightbox.close();
  }
}
