import React, {  } from "react";
import { useFormik } from "formik";
import "./SignUp.css";
import * as Yup from 'yup';
export default function SignUpForm() {

  const formik = useFormik({
    //Init
    initialValues: {
      email: "",
      phone: "",
      name: "",
      confirmPass: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Tên không được rỗng!").min(4,"Điền ít nhất 4 kí tự!"),
      email: Yup.string().required("Email không được rỗng!").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Điền đúng dạng email!"),
      password: Yup.string().required("Mật khẩu không được rỗng!").matches(/^[a-z0-9_-]{6,18}$/,"Mật khẩu từ 6-18 kí tự!"),
      confirmPass: Yup.string().required("Xác nhận mật khẩu không được rỗng!").oneOf([Yup.ref("password"),null],"Mật khẩu không trùng!"),
      phone : Yup.string().required("Số điện thoại không được rỗng!").matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,"Số điện thoại gồm 10 số nếu có nhập số 0 ở đầu tiên. Nếu không nhập 0 thì còn 9 số!")
    }),
    onSubmit: (values) => {
      console.log(formik.values);
    }
    //Cach dung ForMik
  });

  console.log(formik.errors.password);
  return (
    <>
      <section>
        <form className="infoForm" onSubmit={formik.handleSubmit}>
          <label>Tên</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Điền tên?"
          />
              {formik.errors.name ? (
            <p className="errMsg">{formik.errors.name}</p>
          ): <p className="sucMsg">Chính xác &#10004;</p>}
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Điền email?"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
              {formik.errors.email ? (
            <p className="errMsg">{formik.errors.email}</p>
          ): <p className="sucMsg">Chính xác &#10004;</p>}
          <label>Số điện thoại</label>
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder="Điền số điện thoại?"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          {formik.errors.phone ? (
            <p className="errMsg">{formik.errors.phone}</p>
          ): <p className="sucMsg">Chính xác &#10004;</p>}
          <label>Mật khẩu</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Điền mật khẩu?"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
              {formik.errors.password ? (
            <p className="errMsg">{formik.errors.password}</p>
          ): <p className="sucMsg">Chính xác &#10004;</p>}
          <label>Xác nhận mật khẩu</label>
          <input
            type="password"
            name="confirmPass"
            id="confirmPass"
            placeholder="Xác nhận mật khẩu?"
            value={formik.values.confirmPass}
            onChange={formik.handleChange}
          />
             {formik.errors.confirmPass ? (
            <p className="errMsg">{formik.errors.confirmPass} </p>
          ): <p className="sucMsg">Chính xác &#10004;</p>}
          <button type="submit">Hoàn tất</button>
        </form>
      </section>
    </>
  );
}
