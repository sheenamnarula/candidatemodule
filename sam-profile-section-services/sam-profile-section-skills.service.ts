import { Injectable } from '@angular/core';
import { SamDynamicIconDiv } from 'samarthyaWebcomponent/sam-dynamic-section/sam-dynamic-element/view-elements/sam-dynamic-icon-element';
import { SamDynamicChips } from 'samarthyaWebcomponent/sam-dynamic-section/sam-dynamic-element/view-elements/sam-dynamic-chips-element';
import { SamDynamicElementBase } from 'samarthyaWebcomponent/sam-dynamic-section/sam-dynamic-element/sam-dynamic-element-base';

@Injectable()
export class SamProfileSectionSkillsService {

  constructor() { }

  public getSkills() {
    const skills: any = [];
    const align = 'row';
    this.userData.skills.forEach(element => {
      skills.push({ name: element.name, data: element.experience + ' yr' });
    });

    const sectionTitle = 'Skills';
    const elementStandard: SamDynamicElementBase<any>[] = [];
    skills.forEach(skill => {
      elementStandard.push(
        new SamDynamicChips({
          elemName: 'skills',
          elemLabel: 'Skills',
          order: '1',
          dataObj: skill
        })
      );
    });
    console.log(elementStandard);

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
      },
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
