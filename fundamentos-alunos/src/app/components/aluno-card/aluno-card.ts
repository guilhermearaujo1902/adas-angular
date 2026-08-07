import { Component, Input } from '@angular/core';
import { Aluno } from '../../interfaces/aluno';

@Component({
  selector: 'app-aluno-card',
  imports: [],
  templateUrl: './aluno-card.html',
  styleUrl: './aluno-card.css',
})
export class AlunoCard {

  @Input({required: true}) aluno!: Aluno

}
