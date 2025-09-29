import { useForm } from "react-hook-form";
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
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-light py-5">
      <div className="card p-5 shadow bg-white w-100 mx-auto" style={{ maxWidth: "900px" }}>
        <h2 className="text-center mb-4">Form Validation</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Row 1: First Name + Last Name */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">First Name:</label>
              <input
                id="firstName"
                {...register("firstName", { required: "First name is required", pattern: { value: /^[A-Za-z]+$/, message: "Only letters allowed" } })}
                className="form-control"
                placeholder="First Name"
              />
              {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">Last Name:</label>
              <input
                id="lastName"
                {...register("lastName", { required: "Last name is required", pattern: { value: /^[A-Za-z]+$/, message: "Only letters allowed" } })}
                className="form-control"
                placeholder="Last Name"
              />
              {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
            </div>
          </div>

          {/* Row 2: Email + Phone */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                id="email"
                type="email"
                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                className="form-control"
                placeholder="Email"
              />
              {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">Phone:</label>
              <input
                id="phone"
                type="tel"
                {...register("phone", { required: "Phone required", pattern: { value: /^[0-9]{10}$/, message: "Invalid number" } })}
                className="form-control"
                placeholder="Phone"
              />
              {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
            </div>
          </div>

          {/* Row 3: Password + Age */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                id="password"
                type="password"
                {...register("password", { required: "Password required", pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, message: "6+ chars with letters & numbers" } })}
                className="form-control"
                placeholder="Password"
              />
              {errors.password && <p className="text-danger">{errors.password.message}</p>}
            </div>
            <div className="col-md-6">
              <label htmlFor="age" className="form-label">Age:</label>
              <input
                id="age"
                type="number"
                {...register("age", { required: "Age required", pattern: { value: /^[0-9]+$/, message: "Number only" } })}
                className="form-control"
                placeholder="Age"
              />
              {errors.age && <p className="text-danger">{errors.age.message}</p>}
            </div>
          </div>

          {/* Row 4: Gender + DOB */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Gender:</label>
              <div className="d-flex gap-3">
                <div className="form-check">
                  <input className="form-check-input" type="radio" value="male" id="male" {...register("gender", { required: "Gender required" })} />
                  <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" value="female" id="female" {...register("gender", { required: "Gender required" })} />
                  <label className="form-check-label" htmlFor="female">Female</label>
                </div>
              </div>
              {errors.gender && <p className="text-danger">{errors.gender.message}</p>}
            </div>
            <div className="col-md-6">
              <label htmlFor="dob" className="form-label">Date of Birth:</label>
              <input
                id="dob"
                type="date"
                {...register("dob", { required: "DOB required" })}
                className="form-control"
                max={new Date().toISOString().split("T")[0]}
              />
              {errors.dob && <p className="text-danger">{errors.dob.message}</p>}
            </div>
          </div>

          {/* Row 5: Country + File */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="country" className="form-label">Country:</label>
              <select id="country" {...register("country", { required: "Country required" })} className="form-select">
                <option value="">Select</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
              </select>
              {errors.country && <p className="text-danger">{errors.country.message}</p>}
            </div>
            <div className="col-md-6">
              <label htmlFor="file" className="form-label">Upload File:</label>
              <input id="file" type="file" {...register("file", { required: "File required" })} className="form-control" />
              {errors.file && <p className="text-danger">{errors.file.message}</p>}
            </div>
          </div>

          <button className="btn btn-primary mt-3" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
