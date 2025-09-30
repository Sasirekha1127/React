import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FormValidation() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            age: "",
            gender: "",
            phone: "",
            dob: "",
            country: "",
            file: null,
        },
    })

    const onSubmit = (data) => {
        console.log(data)
        alert("Form submitted successfully!")
    }

    return (
        <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
            <div className="p-4 rounded shadow bg-white col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
                <h1 className="text-center mb-4">
                    <span className="text-primary">F</span>
                    <span className="text-danger">o</span>
                    <span className="text-primary">r</span>
                    <span className="text-danger">m</span>
                    <span className="text-primary">V</span>
                    <span className="text-danger">a</span>
                    <span className="text-primary">l</span>
                    <span className="text-danger">i</span>
                    <span className="text-primary">d</span>
                    <span className="text-danger">a</span>
                    <span className="text-primary">t</span>
                    <span className="text-danger">i</span>
                    <span className="text-primary">o</span>
                    <span className="text-danger">n</span>
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-3">
                    
                    {/* First Name */}
                    <div>
                        <label htmlFor="firstName" className="form-label">First Name:</label>
                        <input
                            id="firstName"
                            {...register("firstName", { required: "First name is required", 
                                pattern: { value: /^[A-Za-z]+$/, message: "First name should contain only letters" }
                            })}
                            className="form-control"
                            placeholder="Enter First Name"
                    
                        />
                        {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
                    </div>

                    {/* Last Name */}
                    <div>
                        <label htmlFor="lastName" className="form-label">Last Name:</label>
                        <input
                            id="lastName"
                            {...register("lastName", { required: "Last name is required",
                                pattern: { value: /^[A-Za-z]+$/, message: "Last name should contain only letters" }
                             })}
                            className="form-control"
                            placeholder="Enter Last Name"
                        />
                        {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter Email"
                            {...register("email", { required: "Email is required", 
                                pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                            })}
                            className="form-control"
                        />
                        {errors.email && <p className="text-danger">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter Password"
                            {...register("password", {
                                required: "Password is required",
                                pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, message: "Password must be at least 6 characters, including letters and numbers" }
                            })}
                            className="form-control"
                        />
                        {errors.password && <p className="text-danger">{errors.password.message}</p>}
                    </div>

                    {/* Age */}
                    <div>
                        <label htmlFor="age" className="form-label">Age:</label>
                        <input
                            id="age"
                            type="number"
                            placeholder="Enter Age"
                            {...register("age", {
                                required: "Age is required",
                                "pattern": { value: /^[0-9]+$/, message: "Age must be a number" },
                            })}
                            className="form-control"
                        />
                        {errors.age && <p className="text-danger">{errors.age.message}</p>}
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="form-label">Gender:</label>
                        <div className="d-flex gap-3">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    value="male"
                                    id="male"
                                    {...register("gender", { required: "Gender is required" })}
                                />
                                <label className="form-check-label" htmlFor="male">Male</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    value="female"
                                    id="female"
                                    {...register("gender", { required: "Gender is required" })}
                                />
                                <label className="form-check-label" htmlFor="female">Female</label>
                            </div>
                        </div>
                        {errors.gender && <p className="text-danger">{errors.gender.message}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="form-label">Phone Number:</label>
                        <input
                            id="phone"
                            type="tel"
                            placeholder="Enter Phone Number"
                            {...register("phone", {
                                required: "Phone number is required",
                                pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number format" }
                            })}
                            className="form-control"
                        />
                        {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                    </div>

                    {/* DOB */}
                    <div>
                        <label htmlFor="dob" className="form-label">Date of Birth:</label>
                        <input
                            id="dob"
                            type="date"
                            {...register("dob", { required: "Date of Birth is required" ,
                                pattern: { value: /^\d{4}-\d{2}-\d{2}$/, message: "Invalid date format" }
                            })}
                            className="form-control"
                        />
                        {errors.dob && <p className="text-danger">{errors.dob.message}</p>}
                    </div>

                    {/* Country */}
                    <div>
                        <label htmlFor="country" className="form-label">Country:</label>
                        <select
                            id="country"
                            {...register("country", { required: "Country is required" })}
                            className="form-select"
                        >
                            <option value="">Select Country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Australia">Australia</option>
                        </select>
                        {errors.country && <p className="text-danger">{errors.country.message}</p>}
                    </div>

                    {/* File Upload */}
                    <div>
                        <label htmlFor="file" className="form-label">Upload File:</label>
                        <input
                            id="file"
                            type="file"
                            {...register("file", { required: "File is required" })}
                            className="form-control"
                        />
                        {errors.file && <p className="text-danger">{errors.file.message}</p>}
                    </div>

                    {/* Submit */}
                    <button className="btn btn-primary mb-5" type="submit">Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

