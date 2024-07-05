export interface Job {
    jobId: string;
    company_id: string;
    companyName: string;
    jobTitle: string;
    location: string;
    jobType: string;
    hasRemote?: boolean;
    easyApply:boolean;
    published: Date;
    description: string;
    applicationUrl: string;
    language: string;
    clearanceRequired: boolean;
    jobVacancies:number;
    company:Company;
  }

  export interface Company{
    companyId:string;
  companyName:         string;
  companyWebsiteUrl?:   string ;
  companyLinkedinUrl?: string ;
  rating:              number;
  iconUrl? :            string ;
  location :           string  ;
  companySize :        number    ;
  industry :           string ;
  description :        string  ;
    jobs:Job[];
  }
export interface Users{
    userid :string;
    username:string;
    email:string;
    location:string;
    age:number;
    yearsOfExperience:number;
    preferredJobPosition:string;
    degree:string;
    university:string;
    resume:string;
    image:string;
}

export interface CommunityPost {
  communityId: string;
  communityIcon: string;
  communityName: string;
  postTitle: string;
  postContent: string;
  imageUrl?: string;
  postedAt: string; 
  userId:string;
}

// export const api = 'http://localhost:3000/'

export const api = 'https://glassdoor.koyeb.app/'