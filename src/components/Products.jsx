import { partners } from "../constants";
import { services } from "../constants";

const Products = () => {
  return (
    <div className="md:px-14 py-16 max-w-scren-2xl mx-auto" id="products">
      <div className="text-center my-8">
        <h2 className="text-4xl text-secondary font-semibold mb-2">
          Our Partners
        </h2>
        <p className="text-secondary">Meet Our Dynamic Network of Partners</p>

        {/* Partners Logo */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          {partners.map((item) => (
            <img
              src={item.img}
              alt={item.alt}
              key={item.id}
              className="w-16 h-16"
            />
          ))}
        </div>
      </div>
      {/* Our Products Part */}

      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-secondary font-semibold mb-2">
          Products & Services
        </h2>
        <p className="text-secondary">
          Explore Our Wide Range of Cutting-edge Products and Services
        </p>
      </div>

      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((item) => (
          <div
            key={item.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-primary transition-all duration-100 flex items-center justify-center h-full "
          >
            <div className="text-center">
              <div className="bg-silver mb-4 h-14 mx-auto rounded-tl-3xl rounded-br-3xl flex justify-center items-center">
                <img src={item.image} alt="" className="w-20 h-20" />
              </div>
              <h4 className="text-2xl font-bold text-secondary mt-6 mb-2 px-2 lg:mt-10">
                {item.title}
              </h4>
              <p className="text-sm text-secondary">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
