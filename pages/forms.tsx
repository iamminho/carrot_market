import { FieldErrors, useForm } from 'react-hook-form'

interface LoginForm {
    username: string;
    password: string;
    email:string;
}

export default function Forms() {
    const { register, handleSubmit } = useForm<LoginForm>();
    const onValid = (data: LoginForm) => {
        console.log("valid");
    }
    const onInvalid = (errors: FieldErrors) => {
        console.log(errors);
    }
    return (        
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
            <input
                {...register("username", {
                    required: "username is required", //error message
                    minLength: {
                        value: 5,
                        message: "Username's length should be 5 at least."
                    }
                })}
                type="text"
                placeholder='Username'
                
            />
            <input 
                {...register("email", {
                    required: "email is required"
                })}
                type="text"
                placeholder='Email'
                
            />     
            <input
                {...register("password", {
                    required: "password is required"
                })}
                type="number"
                placeholder='Password'
               
            />
            <input type="submit" value="Create Account" />                   
        </form>
        
    )    
}