import { Link } from "react-router-dom";
import Navbar from "../Shard/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {

    const{createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e .currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name,photo,email,password)

        // create user 
        createUser(email,password)
        .then(res =>{
            console.log(res.user)
        })
        .catch(error =>{
            console.error(error)
        })

    }


    return (
        <div>
            <Navbar></Navbar>

            <h2 className="text-3xl text-center">Please Register</h2>

            <div>
                <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 my-10 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo urel' placeholder="Photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center">Already  Have An Account ? <Link className="text-blue-600 font-bold" to='/login'>Login</Link> </p>

            </div>
        </div>
    );
};

export default Register;