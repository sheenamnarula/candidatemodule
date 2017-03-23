import { Injectable } from '@angular/core';
import { SamDynamicIconDiv } from 'samarthyaWebcomponent/sam-dynamic-section/sam-dynamic-element/view-elements/sam-dynamic-icon-element';
import { SamDynamicChips } from 'samarthyaWebcomponent/sam-dynamic-section/sam-dynamic-element/view-elements/sam-dynamic-chips-element';
import { SamDynamicElementBase } from 'samarthyaWebcomponent/sam-dynamic-section/sam-dynamic-element/sam-dynamic-element-base';

@Injectable()
export class SamProfileSectionPersonalinfoService {

  constructor() { }

  public getPersonalInfo() {
    const sectionTitle = 'Personal Info';
    const align = 'column';

    let lookingForJob = '';
    if (this.userData.status) {
      lookingForJob = 'Looking For JOB';
    } else {
      lookingForJob = 'Not Looking For JOB';
    }

    const elementStandard: SamDynamicElementBase<any>[] = [
      // job looking status
      new SamDynamicChips({
        elemName: 'personalinfo',
        elemLabel: 'Personal Info',
        order: '0',
        dataObj: { name: lookingForJob, info: 'Status' }
      }),
      // user name
      new SamDynamicIconDiv({
        elemName: 'personalinfo',
        elemLabel: 'Personal Info',
        order: '1',
        dataObj: { icon: 'person', data: this.userData.personalinfo.name, info: 'User Name' }
      }),
      // email
      new SamDynamicIconDiv({
        elemName: 'personalinfo',
        elemLabel: 'Personal Info',
        order: '2',
        dataObj: { icon: 'email', data: this.userData.personalinfo.email, info: 'Email' }
      }),
      // Date of Birth
      new SamDynamicIconDiv({
        elemName: 'personalinfo',
        elemLabel: 'Personal Info',
        order: '3',
        dataObj: { icon: 'date_range', data: this.userData.personalinfo.dob, info: 'Date of Birth' }
      }),
      // Phone No.
      new SamDynamicIconDiv({
        elemName: 'personalinfo',
        elemLabel: 'Personal Info',
        order: '4',
        dataObj: {
          icon: 'phone', data: this.userData.personalinfo.contact.I
          + ', ' + this.userData.personalinfo.contact.II, info: 'Phone No.'
        }
      }),
      // location
      new SamDynamicIconDiv({
        elemName: 'personalinfo',
        elemLabel: 'Personal Info',
        order: '4',
        dataObj: { icon: 'location_on', data: this.userData.personalinfo.address.loc, info: 'Location' }
      }),
      // Aadhar No.
      new SamDynamicIconDiv({
        elemName: 'personalinfo',
        elemLabel: 'Personal Info',
        order: '4',
        dataObj: { icon: 'chrome_reader_mode', data: this.userData.personalinfo.identity[1]['adhaar'], info: 'Aadhar Number' }
      }),
    ];
    return { title: sectionTitle, align: align, data: elementStandard.sort((a, b) => a.order - b.order) };
  }


  // tslint:disable-next-line:member-ordering
  public userData = {
    'username': '',
    'profession': '',
    'createdOn': 'Date',
    'createdBy': '',
    'updatedOn': '',
    'updatedBy': '',
    'personalinfo': {
      'name': 'Muruguavel A',
      'fname': 'Murugavel',
      'lname': 'Annamalai Arasu Chkaravarti Boss Kabali AAA',
      'dob': '11-11-1992',
      'gender': 'm',
      'email': 'muruga55@gmail.com',
      'altemail': 'muruga55@gmail.com',
      'contact': {
        'I': '9988989771',
        'II': '04242425252'
      },
      'address': {
        'loc': 'SomeWhere',
      },
      'married': false,
      'identity': [
        {
          'regno': ''
        },
        {
          'adhaar': '1212123231'
        }
      ],

      'preflang': 'English',
      'nativelang': 'Hindi',
      'lang': [
        {
          'name': 'Hindi',
          'r': true,
          'w': false,
          's': true
        },
        {
          'name': 'English',
          'r': true,
          'w': true,
          's': false
        }
      ],
      'pic': 'http://profilepicurl',
      'center': '',
    },
    'qualifications': [
      {
        'name': 'BE',
        'subject': 'electronics',
        'academictype': 'Graduation',
        'batch': '2012',
        'result': { 'score': '85', 'unit': '%age' },
        'institute': 'ABC College Of Tech',
        'affiliation': 'ABC University',
        'location': 'SomeWhere'
      },
      {
        'name': 'ME',
        'level': 'Post Graduation',
        'yr': '2016',
        'percentage': '95',
        'institute': 'ABC College Of Tech',
        'affiliatedBy': 'ABC University',
        'loc': 'SomeWhere'
      }
    ],
    'preferences': {
      'looking': true,
      'roles': [
        {
          'name': 'FrontEndDeveloper',
          'engagement': 'full',
          'expectedSal': { 'min': '', 'max': '' },
          'skills': ['MEAN'],
          'availableFrom': '12-12-2017'
        }
      ]
    },
    'experiences': [
      {
        'workplace': 'TCS',
        'designation': '',
        'role': 'SoftwareDeveloper',
        'duration': { 'start': '', 'end': '' },
        'location': 'Pune',
        'skills': [
          'java',
          'HTML',
          'Angular2'
        ]
      }
    ],
    'skills': [
      {
        'name': 'java',
        'experience': '2',
        'expertise': 'skilled'
      },
      {
        'name': '.net',
        'experience': '1',
        'expertise': 'fresher'
      },
      {
        'name': 'Angular.io',
        'experience': '1',
        'expertise': 'fresher'
      },
      {
        'name': 'React',
        'experience': '1',
        'expertise': 'expert'
      }
    ],
    'projects': [
      {
        'name': 'Digital',
        'description': '',
        'duration': { 'start': '', 'end': '' },
        'location': 'bangalore',
        'skills': [
          'Java',
          '.net'
        ],
        'role': 'Team Lead',
      }
    ],
    'showcase': [
      {
        'contenttype': 'image/vidieo/link',
        'title': 'Facebook_url',
        'url': 'www.facebook.com/gowthamjeeva',
        'desc': 'short description'
      },
      {
        'title': 'Linkedin_url',
        'url': 'www.linkedin.com/gowthamjeeva',
        'desc': 'short description'
      },
      {
        'title': 'video',
        'url': 'Amazon server url',
        'desc': 'short description'
      }
    ],
    status: true
  };

}
