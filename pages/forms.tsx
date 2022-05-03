import { FieldErrors, useForm } from 'react-hook-form'

interface LoginForm {
    username: string;
    password: string;
    email:string;
}

export default function Forms() {
    const { register, handleSubmit, formState: {errors}, } = useForm<LoginForm>({
        mode: "onChange", //mode의 default는 onSubmit이다.
    });
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
            {errors.username?.message}
            <input 
                {...register("email", {
                    required: "email is required",
                    validate: {
                        notGmail: (value) => !value.includes("@gmail.com") || "You cannot use Gmail, please another use Eamil",                       
                    },
                })}
                type="text"
                placeholder='Email'
                
            />   
            {errors.email?.message}
            <input
                {...register("password", {
                    required: "password is required"
                })}
                type="number"
                placeholder='Password'
               
            />
            {errors.password?.message}
            <input type="submit" value="Create Account" />                   
        </form>
        
    )    
}