import { useForm } from 'react-hook-form'

export default function Forms() {
    const {register, watch} = useForm();
    console.log(watch());


    return (        
        <form>
            <input
                {...register("username")}
                type="text"
                placeholder='Username'
                required
            />
            <input
                {...register("email")}
                type="text"
                placeholder='Email'
                required
            />
            
        </form>
    )
}