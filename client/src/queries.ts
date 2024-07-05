import { gql } from '@apollo/client';

export const getAllUsers = gql`
query{
  getallusers{
    email
  }
}
`;
export const getAllJobs = gql`

query{
  getAllJobs{
    jobId
    companyId
    companyName
    iconUrl
    jobTitle
    location
    jobType
    hasRemote
    published
    description
    applicationUrl
    language
    clearanceRequired
    jobVacancies
    
  }
}
  `

  export const Userexists= gql `
  query Userexist($email:String!){
  userexist(userexit:{email:$email}){
    email 
  }
}
  
  `

  export const Createuser = gql `
  mutation CreateingUser(
  $email:String! 
  $username:String!
  $password:String!
  $age:Int!
  $yearsOfExperience:Int!
  $location:String!
  $preferedProfession:String!)
  {
    createingUser(email:$email,username:$username ,password:$password, age:$age, yearsOfExperience:$yearsOfExperience, location:$location, preferedProfession:$preferedProfession)
    {
    email
    location
    
    }
}
  `

  export const Createnewuser = gql `
  query Createnewusers(
  $email:String! 
  $username:String!
  $password:String!
  $age:Int!
  $yearsOfExperience:Int!
  $location:String!
  $preferedProfession:String!
  ){createnewusers(createUserData:{email:$email,username:$username,password:$password,age:$age,yearsOfExperience:$yearsOfExperience,location:$location,preferedProfession:$preferedProfession}){
    email
    location
    
  }
}
  `


export const demomutation = gql `
mutation demomutations{
  email
  password
}

`