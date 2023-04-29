import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos$: Observable<any>;
  todos: Array<any>;
  constructor(firestore: Firestore) {
    const itemCollection = collection(firestore, 'todos');
    this.todos$ = collectionData(itemCollection);

    this.todos$.subscribe((newTodos) => {
      console.log('Neue Todos sind: ', newTodos);
      this.todos = newTodos;
    });
  }
}
