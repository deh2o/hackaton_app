import aboutImg from "../assets/images/about-img_1.jpg";
import Button from "./Button";

const About = () => {
  return (
    <div>
      {/* About US Write up */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="aboutImgContainer">
            <img src={aboutImg} alt="" />
            <div className="imgOverlay"></div>
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-secondary font-semibold mb-4 md:w-4/5">
              About Ebonyi State Hatchery
            </h2>
            <p className="md:w-full text-sm text-secondary mb-8 text-justify">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &apos;Content here,
              content here&apos;, making it look like readable English. Many
              desktop publishing packages and web page editors now use Lorem
              Ipsum as their default model text, and a search for &apos;lorem
              ipsum&apos; will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose injected humour and the like.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-Tint4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-secondary font-semibold mb-4 md:w-4/5">
              A New Dawn For <br />
              <span className="text-primary">Ebonyi State Hatchery</span>
            </h2>
            <p className="md:w-full text-sm text-secondary mb-8 text-justify">
              Ebonyi State Hatchery is witnessing a new dawn, an exciting one.
            </p>
          </div>

          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:itmes-center justify-around gap-12 text-secondary">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img
                  src="./src/assets/stats/partners.png"
                  alt=""
                  className="w-10 h-10"
                />
                <div>
                  <h4 className="text-2xl text-Dgrey font-semibold">
                    over 50+
                  </h4>
                  <p>Partners</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src="./src/assets/stats/Experience.png"
                  alt=""
                  className="w-10 h-10"
                />
                <div>
                  <h4 className="text-2xl text-Dgrey font-semibold">Since</h4>
                  <p>1979</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img
                  src="./src/assets/stats/products.png"
                  alt=""
                  className="w-10 h-10"
                />
                <div>
                  <h4 className="text-2xl text-Dgrey font-semibold">over 10</h4>
                  <p>Products</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src="./src/assets/stats/support.png"
                  alt=""
                  className="w-10 h-10"
                />
                <div>
                  <h4 className="text-2xl text-Dgrey font-semibold">24/7</h4>
                  <p>Active Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
