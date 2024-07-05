import { Args, Mutation, Resolver ,Query } from '@nestjs/graphql';
import { User } from '../model/user';
import { CreateUserInput } from './dto/input/createuser.input';
import { UsersService } from './users.service';
import { Userexist } from './dto/input/userexist.input';

@Resolver()
export class UsersResolver {

    constructor(private readonly userservice:UsersService){}

    @Mutation(() => User)
    createUser(@Args('createUserData') createUserData:CreateUserInput): Promise<User>{
        console.log('request for creating new user')
        return this.userservice.createUser(createUserData)
    }

//     @Mutation(() => User)
//     createingUser(

//     @Args('email') email:string , 
//     @Args('password') password:string ,
//     @Args('username') username:string ,
//     @Args('age') age:number ,
//     @Args('yearsOfExperience') yearsOfExperience:number,
//     @Args('location') location:string,
//     @Args('preferedProfession') preferedProfession:string
    

// ): Promise<User>{
//         console.log('request for creating new user')
//         return this.userservice.createingUser(email,password,username,age,yearsOfExperience,location,preferedProfession)
//     }


    // @Query(() => User,{nullable: true} )
    // userexist(@Args('userexit') userexist:Userexist):Promise<User | null>{
    //     console.log("requesting");
    //     return this.userservice.userExists(userexist);
    // }

    @Query(() => [User])
    getallusers():Promise<User[]>{
        return this.userservice.getallusers()
    }

    @Query(() => User)
    createnewusers(@Args('creatuserdata') createuserdata:CreateUserInput){
        console.log('request for creating new user')
        return this.userservice.createUser(createuserdata)
    }

    @Mutation(() => [User])
    demomutations():Promise<User[]>{
        return this.userservice.getallusers()
    }


}
