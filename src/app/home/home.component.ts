import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Sample user data
  user = {
    name: 'Ahmad Nabeel',
    position: 'Computer Engineer Student',
    reportingTo: 'Wedyan',
    corporateLevel: 10,
    vacationRequests: 10,
    leaveRequests: 10
  };

  // Sample vacation request data
  vacationRequests = [
    { name: 'Ahmad Nabeel', dateSubmitted: '26/9/2024', },
    { name: 'Ahmad Nabeel', dateSubmitted: '26/9/2024', }
  ]
  searchTerm = '';
}