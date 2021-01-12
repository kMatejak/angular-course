import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseSelected = new EventEmitter<Course>();

  constructor() {}

  ngOnInit(): void {}

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("card component -- button clicked ...");
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    if (this.course.category === 'BEGINNER') {
      return 'beginner';
    }
  }

  cardStyles() {
    return {
      // 'text-decoration': 'underline'
      'background-image': 'url(' + this.course.iconUrl + ')'
    };
  }

}
