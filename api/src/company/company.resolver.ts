import { Args, Query, Resolver } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { Company } from 'src/model/company';
import { GetPreferredCompanyLocation } from './dto/args/companylocation.args';
import { GetPreferredCompany } from './dto/args/companyname.args';

@Resolver()
export class CompanyResolver {

    constructor(private readonly companyservice:CompanyService){}


    @Query(() => [Company])
    getAllCompany() {
        return this.companyservice.getAllCompany();
    }

    // @Query(() => [Company])
    // getCompanyByLocation(@Args('getpreferredcompanylocation') getpreferredcompanylocation:GetPreferredCompanyLocation): Promise<Company[]>{
    //     return this.companyservice.getCompanyByLocation(getpreferredcompanylocation)
    // }

    // @Query(() => [Company])
    // getCompanyByName(@Args('getpreferredcompany') getpreferredcompany:GetPreferredCompany): Promise<Company[]>{
    //     return this.companyservice.getCompanyByName(getpreferredcompany)
    // }

    // @Query(() => [Company])
    // updatecompanydata():Promise<Company[]>{
    //     return this.companyservice.updatecompanydata();
    // }


}
