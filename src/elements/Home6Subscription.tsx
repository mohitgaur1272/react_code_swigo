import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IMAGES } from "./theme";
import toast, { Toaster } from "react-hot-toast";
const Home6Subscription = () => {
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
      <section className="clearfix">
        <div className="container-fluid">
          <div
            className="subscrible-bx style-1 content-inner"
            style={{ backgroundImage: `url(${IMAGES.background_bg6})` }}
          >
            <div className="container">
              <div className="row ft-subscribe-wrapper justify-content-center text-center">
                <div className="col-xl-8 overflow-hidden">
                  <div className="section-head text-center style-1">
                    <h2 className="title">
                      SUBSCRIBE TO GET LATEST NEWS ABOUT US
                    </h2>
                  </div>
                  <div className="ft-subscribe m-b30">
                    <form
                      className="dzSubscribe"
                      method="post"
                      ref={form}
                      onSubmit={sendEmail}
                    >
                      <div className="dzSubscribeMsg"></div>
                      <div className="input-group">
                        <input
                          value={input}
                          onChange={(e) => {
                            setInput(e.target.value);
                          }}
                          name="dzEmail"
                          required
                          type="email"
                          className="form-control aos-item"
                          placeholder="Enter Your Email Address"
                        />

                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className="btn btn-primary style-1"
                        >
                          View All Post
                        </button>
                        <button
                          name="submit"
                          value="Submit"
                          type="button"
                          className="btn btn-primary style-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="18"
                            fill="none"
                            //   xmlns="https://vecta.io/nano"
                          >
                            <g clipPath="url(#A)">
                              <path
                                d="M.746 17.179c-.148.68.374.967.858.75l16.365-8.391h.002c.195-.11.308-.308.308-.537s-.113-.428-.308-.538h-.002L1.604.071C1.12-.146.598.142.746.822L2.25 7.521 10.792 9 2.25 10.479.746 17.179z"
                                fill="#fff"
                              />
                            </g>
                            <defs>
                              <clipPath id="A">
                                <path
                                  fill="#fff"
                                  transform="translate(.5)"
                                  d="M0 0h18v18H0z"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home6Subscription;
