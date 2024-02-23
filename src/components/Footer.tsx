import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { IMAGES } from "../elements/theme";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const [input, setInput] = useState<string>("");
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setInput("");
    if (form.current) {
      emailjs
        .sendForm(
          "emailId",
          "template_0byuv32",
          form.current,
          "qUDIPykc776NYHv4m"
        )
        .then(
          () => {
            toast.success("Successfully send!");
          },
          (error) => {
            toast.error(error.text);
          }
        );
    }
  };
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={true} />
      <footer className="site-footer style-1" id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-xl-7 col-lg-10">
                <div className="footer-logo logo-dark">
                  <img src={IMAGES.logo} alt="" />
                </div>
                <p className="text">
                  Sed laoreet orci id pretium sodales. Nunc ac est dolor. Donec
                  placerat dolor et mi elementum, in suscipit libero tincidunt.
                  Ut at tempor ex, vel auctor tortor. Sed finibus vitae mi et
                  imperdiet.
                </p>
                <div className="ft-subscribe">
                  <form
                    className="dzSubscribe"
                    method="post"
                    ref={form}
                    onSubmit={sendEmail}
                  >
                    <div className="dzSubscribeMsg"></div>
                    <div className="input-group">
                      <input
                        name="dzEmail"
                        value={input}
                        onChange={(e) => {
                          setInput(e.target.value);
                        }}
                        required
                        type="email"
                        className="form-control aos-item"
                        placeholder="ENTER YOUR EMAIL"
                      />
                      <button
                        name="submit"
                        value="Submit"
                        type="submit"
                        className="btn btn-primary aos-item"
                      >
                        SUBSCRIBE NOW{" "}
                        <i className="m-l10 fas fa-caret-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <ul className="footer-link">
                  <li>
                    <Link to="#">PRIVACY POLICY</Link>
                  </li>
                  <li>
                    <Link to="#">TEAM & CONDITION</Link>
                  </li>
                </ul>
                <h4 className="mail-text">
                  <span className="text-primary">EMAIL:</span> INFO@GMAIL.COM
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7 text-start">
                <span className="copyright-text">
                  Copyright © 2023{" "}
                  <Link
                    to="https://dexignzone.com/"
                    className="text-primary"
                    target="_blank"
                  >
                    DexignZone
                  </Link>{" "}
                  All rights reserved.
                </span>
              </div>
              <div className="col-lg-6 col-md-5 text-end">
                <ul className="social-list style-1">
                  <li>
                    <Link to="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
