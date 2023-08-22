import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  currentQuestionIndex: number = 0;
  selectedOptions: string[] = [];
  allQuestionsAnswered: boolean = false;
  nextQuestion: boolean = false;
  questions: any[] = [
    {
      question: 'Which of these elements in HTML can be used for making a text bold?',
      options: ['<a>', '<pre>', '<br>', '<b>'],
      answer: '<b>',
    },
    {question: 'Which tag do we use in HTML for inserting a line-break?',
      options: ['<a>', '<br>', '<b>', '<pre> '],
      answer: '<br>',
    },
    {
      question: 'In HTML, how do we insert an image?',
      options: ['<img src = “jtp.png” />', '<img href = “jtp.png” />', '<img link = “jtp.png” />', '<img url = “jtp.png” />'],
      answer: '<img src = “jtp.png” />',
    },
    {
      question: 'How to create a hyperlink in HTML',
      options: ['<a link = “www.thinkandlearn.com”> thinkandlearn.com </a>', '<a> www.thinkandlearn.com <thinkandlearn.com /a>', '<a href = “www.thinkandlearn.com”> thinkandlearn.com </a> ', '<a url = “www.thinkandlearn.com” thinkandlearn.com /a>'],
      answer: '<a href = “www.thinkandlearn.com”> thinkandlearn.com </a> ',
    },
    {
      question: 'Which tag do we use to define the options present in the drop-down selection lists?',
      options: ['<list>', '<option> ', '<dropdown>', '<select> '],
      answer: '<option> ',
    }
    // ... Add other questions
  ];

  ngOnInit() {
    this.selectedOptions = new Array(this.questions.length).fill('');
  }

  goToNextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }
  goToPreviousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
  }
}
isSubmittedEnabled: boolean = false;
submitAnswers() {// Implement logic to submit answers
  Swal.fire('Thank you...', 'you submitted succesfully', 'success')
 
  }
}