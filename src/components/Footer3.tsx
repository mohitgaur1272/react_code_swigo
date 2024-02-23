import { FormEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
const Footer3 = () => {
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
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6  m-b40 aos-item aos-init aos-animate">
              <div className="widget widget_getintuch">
                <div className="widget-title">
                  <h4 className="title">CONTACT</h4>
                </div>
                <ul>
                  <li>
                    <svg
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_10_349)">
                        <path
                          d="M26.25 13C26.25 21.75 15 29.25 15 29.25C15 29.25 3.75 21.75 3.75 13C3.75 10.0163 4.93526 7.15483 7.04505 5.04505C9.15483 2.93526 12.0163 1.75 15 1.75C17.9837 1.75 20.8452 2.93526 22.955 5.04505C25.0647 7.15483 26.25 10.0163 26.25 13Z"
                          stroke="#F8F8FA"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 16.75C17.0711 16.75 18.75 15.0711 18.75 13C18.75 10.9289 17.0711 9.25 15 9.25C12.9289 9.25 11.25 10.9289 11.25 13C11.25 15.0711 12.9289 16.75 15 16.75Z"
                          stroke="#F8F8FA"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_10_349">
                          <rect
                            width="30"
                            height="30"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad
                  </li>
                  <li>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.5 21.1501V24.9001C27.5014 25.2482 27.4301 25.5928 27.2906 25.9118C27.1512 26.2308 26.9466 26.5171 26.6901 26.7524C26.4336 26.9878 26.1307 27.167 25.8009 27.2785C25.4712 27.39 25.1217 27.4314 24.775 27.4001C20.9286 26.9822 17.2338 25.6678 13.9875 23.5626C10.9673 21.6434 8.40668 19.0828 6.48751 16.0626C4.37498 12.8016 3.06031 9.08886 2.65001 5.22512C2.61877 4.87945 2.65985 4.53107 2.77063 4.20215C2.88142 3.87323 3.05947 3.57098 3.29347 3.31465C3.52746 3.05831 3.81226 2.85351 4.12975 2.71327C4.44723 2.57304 4.79043 2.50045 5.13751 2.50012H8.88751C9.49414 2.49415 10.0822 2.70897 10.5422 3.10454C11.0022 3.5001 11.3026 4.04943 11.3875 4.65012C11.5458 5.8502 11.8393 7.02853 12.2625 8.16262C12.4307 8.61002 12.4671 9.09626 12.3674 9.56372C12.2677 10.0312 12.0361 10.4603 11.7 10.8001L10.1125 12.3876C11.892 15.517 14.4831 18.1082 17.6125 19.8876L19.2 18.3001C19.5399 17.964 19.969 17.7324 20.4364 17.6327C20.9039 17.533 21.3901 17.5694 21.8375 17.7376C22.9716 18.1608 24.1499 18.4543 25.35 18.6126C25.9572 18.6983 26.5118 19.0041 26.9082 19.472C27.3046 19.9398 27.5152 20.5371 27.5 21.1501Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    +91 987-654-3210
                    <br />
                    +91 123-456-7890
                  </li>
                  <li>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.5 15H20L17.5 18.75H12.5L10 15H2.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.8125 6.3875L2.5 15V22.5C2.5 23.163 2.76339 23.7989 3.23223 24.2678C3.70107 24.7366 4.33696 25 5 25H25C25.663 25 26.2989 24.7366 26.7678 24.2678C27.2366 23.7989 27.5 23.163 27.5 22.5V15L23.1875 6.3875C22.9805 5.97098 22.6615 5.62046 22.2662 5.37535C21.8709 5.13024 21.4151 5.00025 20.95 5H9.05C8.5849 5.00025 8.12908 5.13024 7.73381 5.37535C7.33853 5.62046 7.01947 5.97098 6.8125 6.3875Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    info@example.com
                    <br />
                    info@example.com
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6 m-b40 aos-item aos-init aos-animate">
              <div className="widget widget_links">
                <div className="widget-title">
                  <h4 className="title">Our Links</h4>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/portfolio">Services</Link>
                  </li>
                  <li>
                    <Link to="/services">Blog</Link>
                  </li>
                  <li>
                    <Link to="/team">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/blog-grid">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6 m-b40 aos-item aos-init aos-animate">
              <div className="widget widget_links">
                <div className="widget-title">
                  <h4 className="title">Services</h4>
                </div>
                <ul>
                  <li>
                    <Link to="#">Interior Design</Link>
                  </li>
                  <li>
                    <Link to="#">Architecture</Link>
                  </li>
                  <li>
                    <Link to="#">Furniture Production</Link>
                  </li>
                  <li>
                    <Link to="#">Floor Plan Design</Link>
                  </li>
                  <li>
                    <Link to="#">24/7 Support</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 m-b40 aos-item aos-init aos-animate">
              <div className="widget">
                <div className="widget-title">
                  <h4 className="title">Subscribe Now</h4>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem psum has been the industry's{" "}
                </p>
                <form
                  className="dzSubscribe"
                  ref={form}
                  onSubmit={sendEmail}
                  method="post"
                >
                  <h6 className="title">Subscribe To Our Newsletter</h6>
                  <div className="input-group">
                    <input
                      value={input}
                      onChange={(e) => {
                        setInput(e.target.value);
                      }}
                      name="dzEmail"
                      required
                      type="email"
                      className="form-control aos-item aos-init"
                      placeholder="Your Email Address"
                    />
                    <button
                      name="submit"
                      value="Submit"
                      type="submit"
                      className="btn btn-primary aos-item aos-init"
                    >
                      Subscribe
                    </button>
                  </div>
                  <div className="dzSubscribeMsg m-t10"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-lg-start p-l0">
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
            <div className="col-lg-6 text-lg-end p-r0">
              <ul className="footer-link d-inline-block">
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Help Desk</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer3;
