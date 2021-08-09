import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
	
	const {
		register,
		handleSubmit,
		formState : { errors }
	} = useForm();

	const formError = () => {
		return " Une erreur est survenue"
	}

	const onSubmit = data =>
		console.log("envoi")
	
	return (

		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>LOGIN</h1>

				<div className="form-group mb-2">
					<label htmlFor="username" className="mb-1">Username</label>
					<input
						{...register("username", { required : true, maxLength : 15 })}
						className	={`form-control ${ errors.username?.type === "required" && "is-invalid"}`}
						placeholder	="Professeur"
					/>
					<small className="form-text text-muted">
					{
						errors.username?.type === "required" && formError()
					}
					</small>
					
				</div>
				
				<div className="form-group">
					<label htmlFor="password" className="mb-1">Password</label>
					<input
						{...register("password", { required : true, minLength : 6 })} 
						type		="password"
						className	={`form-control ${ errors.password?.type === "required" && "is-invalid"}`}
					/>
					<small className="form-text text-muted">
					{
						errors.username?.type === "required" && formError()
					}
					</small>
				</div>

				<input type="submit" className="btn btn-primary mt-3" />
			</form>
		</div>

	)
}

export default Login