import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css']
})
export class ReactionsComponent implements OnInit {
  @Input() articleId!: string;

  reactions = [
    { emoji: '🔥', label: 'Hype', count: 0 },
    { emoji: '🤯', label: 'Lore', count: 0 },
    { emoji: '💖', label: 'Waifu', count: 0 },
    { emoji: '😭', label: 'Chorei', count: 0 }
  ];

  ngOnInit(): void {
    this.loadReactions();
  }

  loadReactions(): void {
    const stored = localStorage.getItem(`reactions-${this.articleId}`);
    if (stored) {
      this.reactions = JSON.parse(stored);
    }
  }

  react(index: number, event: MouseEvent): void {
    event.stopPropagation(); // ⚠️ ISSO IMPEDE O CLIQUE DE SUBIR
    this.reactions[index].count++;
    localStorage.setItem(`reactions-${this.articleId}`, JSON.stringify(this.reactions));
  } 

}
