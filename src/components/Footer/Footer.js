import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";

export default function Footer() {
  //using Formik for Subscribe form validation
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: Yup.object({
        email: Yup.string().required("Required to join"),
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Company newsletter to receive our newest stocks and cryptos!
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form onSubmit={formik.handleSubmit}>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? <p className="requiredFormikError">{formik.errors.email}</p> : null}

            <button className="emailSubmitBtn" type="submit"><span>Subscribe</span></button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/about">How it works</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact">Contact</Link>
            <Link to="/contact">Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>

      <section class='social-media'>
        <div class='social-media-wrap'>
            <Link to='/description' className='stockfluence'>
              Stockfluence
              <i class='fab fa-typo3' />
            </Link>
          <small class='website-rights'>Stockfluence © 2022</small>
          <div class='social-icons'>
            {/* Will update this once I add our Social Media! */}
            {/* <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}
