import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course = [
    { 'id': 1, 'name': 'Learn AngularJS', 'description': 'AngularJS is a JavaScript framework written in JavaScript.', 'image': '../../assets/AngularJS-1.png', 'url':'https://www.youtube.com/watch?v=xGpHfFf18Ns' },
    { 'id': 2, 'name': 'Learn NodeJS', 'description': "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.", 'image': '../../assets/nodejs-1.png', 'url':'https://www.youtube.com/watch?v=JnvKXcSI7yk' },
    { 'id': 3, 'name': 'Learn React', 'description': 'React (React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components.', 'image': '../../assets/reactjs.png', 'url': 'https://www.youtube.com/watch?v=fSp2C7QPH8M' },
    { 'id': 4, 'name': 'Learn TypeScript', 'description': 'AngularJS is a JavaScript framework written in JavaScript.', 'image': '../../assets/typescript.png', 'url': 'https://www.youtube.com/watch?v=BwuLxPH8IDs' }


  ]
}
