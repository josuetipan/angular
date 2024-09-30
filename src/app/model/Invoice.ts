import { Company } from "./Company";
import { Customer } from "./Customer";
import { InvoiceItems } from "./Invoiceltem";

export class Invoice{
    id!:string;
    company!:Company;
    customer!: Customer;
    items!:InvoiceItems[];

}