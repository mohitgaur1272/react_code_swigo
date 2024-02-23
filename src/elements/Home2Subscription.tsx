import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Home2Subscription = () => {
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
      <section className="">
        <div className="container">
          <div className="row ft-subscribe-wrapper justify-content-center text-center">
            <div className="col-xl-8">
              <div className="section-head text-center style-1">
                <h2 className="title">SUBSCRIBE TO GET LATEST NEWS ABOUT US</h2>
                <p>
                  We recommended you to subscribe to our newslatter, enter your
                  email below to get daily update about us.
                </p>
              </div>
              <div className="ft-subscribe style-2">
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
                      required
                      value={input}
                      onChange={(e) => {
                        setInput(e.target.value);
                      }}
                      type="email"
                      placeholder="Enter Your Email Address"
                      className="form-control aos-item"
                    />
                    <button
                      name="submit"
                      value="Submit"
                      type="submit"
                      className="btn btn-primary aos-item"
                    >
                      SUBSCRIBE NOW <i className="m-l5 las la-plus"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home2Subscription;
