import { IsNotEmpty, Length } from "class-validator";

export class CreateUserDTO {

   @IsNotEmpty({
       message: 'O nome é obrigatório',
   })
   @Length(3,100)
   name: string;

   @IsNotEmpty()
   email: string;
}