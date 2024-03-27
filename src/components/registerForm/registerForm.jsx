"use client";
import { register } from "@/lib/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const [state, setState] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form
      action={setState}
      data-bs-theme="dark"
      className="bg-dark pt-5 pb-4 px-4 rounded-4 align-self-center"
      style={{ maxWidth: "500px" }}
    >
      <h2 className="text-center txt-weight-mid">
        <span id="logo">dreamlabs</span>
      </h2>

      <div className="row mx-0" style={{ rowGap: "12px" }}>
        <div className="col-12">
          <label htmlFor="username" className="text-muted required">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            required
          />
          {state?.unError && (
            <p className="mt-2 mb-0 txt-size-small text-danger">
              {state?.unError}
            </p>
          )}
        </div>

        <div className="col-12">
          <label htmlFor="email" className="text-muted required">
            Email
          </label>
          <input type="email" className="form-control" name="email" required />
        </div>

        <div className="col-12">
          <label htmlFor="password" className="text-muted required">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="cpassword" className="text-muted required">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            name="cpassword"
            required
          />
          {state?.pwError && (
            <p className="mt-2 mb-0 txt-size-small text-danger">
              {state?.pwError}
            </p>
          )}
        </div>
        <div className="col-12">
          <label htmlFor="img" className="text-muted">
            Profile picture
          </label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            className="form-control"
            name="img"
          />
        </div>
        <div className="col-12 mt-3">
          <button type="submit" className="btns primary-btn w-100">
            Register
          </button>
          <p className="text-center mt-3 text-muted">
            Already have an account?{" "}
            <Link href="/login" className="txt-color-mid">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
