import { Injectable } from '@angular/core';

@Injectable()
export class SamProfileCardService {

  public samCardData = {
    profilepic: 'http://images.indianexpress.com/2016/06/viratkohlil.jpg',
    name: 'Prakul Kumar',
    age: 22,
    email: 'gowthamjeeva55@gmail.com ',
    profession: 'IT ',
    role: 'Full Stack Developer ',
    mobileNumber: '8220002829 ',
    currentCompany: 'Wipro Technologies',
    experience: '5 ',
    skills: [{ name: 'Java' },
    { name: 'Java Script' },
    { name: 'HTML' },
    { name: 'PHP' }],
    qualifications: ['Electronics', 'Master in Electronics'],
    location: 'Bangalore, 560021',
    communications: ['English', 'Tamil', 'Hindi']
  };

  getProfileCardData() {
    return this.samCardData;
  }

  constructor() { }
}
