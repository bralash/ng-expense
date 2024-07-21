import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseComponent } from "./expense/expense.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExpenseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'expense';
}
