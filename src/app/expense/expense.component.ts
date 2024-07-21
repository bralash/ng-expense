import { Component } from '@angular/core';
import { BalanceComponent } from "../balance/balance.component";

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [BalanceComponent],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss'
})
export class ExpenseComponent {

}
