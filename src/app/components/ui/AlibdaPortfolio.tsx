import React from "react";

// Local logos import
import bristo from "../../../assets/bristo.png";
import hella from "../../../assets/hella.png";
import lakeforest from "../../../assets/lakeforest.png";
import michalen from "../../../assets/michalen.png";
import dlf from "../../../assets/dlf.png";

const AlibdaFullPortfolio = () => {
  const allClients = [


        // New Local Logos
    { name: "Bristo", logo: bristo },
    { name: "Hella", logo: hella },
    { name: "Lake Forest", logo: lakeforest },
    { name: "Michalen", logo: michalen },
    { name: "DLF", logo: dlf },
    { name: "Andaz", logo: "https://i.pinimg.com/474x/7a/09/ac/7a09acb86f896087346aca9292a11196.jpg" },
    { name: "Punj Lloyd", logo: "https://assets.weforum.org/organization/image/Kw01Ayvx1aNstc5rEN01NI1zJZRIJj4Tz3h3ZWsWnxk.jpg" },
    { name: "RCKC", logo: "https://rckc.in/wp-content/uploads/2023/06/RCKC__________________logo.png" },
    { name: "Base Hospital Barrackpore", logo: "https://media.9curry.com/uploads/organization/image/1242/base-hospital-barrackpore-logo.png" },
    { name: "RR Hospital", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThfyQRYcgQ9Bia6u5AiGslSVNnVL6-7cvfiQ&s" },
    { name: "Parker Group", logo: "https://media.placester.com/image/upload/c_fill,q_80,w_1920/v1/inception-app-prod/OWQyYmU1ZmUtMDU1Yy00OGJiLWI5ZTktNmE3YjRiNmE1YWFj/content/2025/08/2c8870f4c736e45bf5cf480ae03e06d009c4f931.png" },
    { name: "Terminal 3 IGI Airport", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhqVsVaZ8zGn0zcixPI2t-10zWgf27JWXkg&s" },
    { name: "Common Wealth Flats", logo: "https://orchardbenefits.ca/wp-content/uploads/2022/11/logo-common-wealth-1.png" },
    { name: "Tirupati Sugar Mill", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZw0HTsEdXRkApXrhXUOUOgoNC5uoneeTERg&s" },
    { name: "Ritu Wears", logo: "https://www.weddingplz.com/images/portfolio/main/18/5319/Ritu-Wears-3263-1-weddingplz.jpg" },
    { name: "Pinjor Restaurant", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN-Gjc98j0-xWsKoJOD_ZeGrz6tHhRU6gb-g&s" },
    { name: "Khalsa Restaurant", logo: "https://lh3.googleusercontent.com/QzCQUjOFCHteyqooPxrYUa7gx-xYn_nHCtjn9Wmglvb4urn0knPUdrxv34DPx-g_tuVZYt1cEO0marz6tDDf6AolzYju" },
    { name: "SRS Multiplex", logo: "https://content.jdmagicbox.com/comp/amritsar/m3/0183px183.x183.220204171038.j2m3/catalogue/srs-cinemas-green-avenue-amritsar-cinema-halls-0z9pcxb6jl.jpg" },
    { name: "Paul Garments", logo: "https://images.seeklogo.com/logo-png/38/1/paul-garments-logo-png_seeklogo-380611.png" },
    { name: "The Claridges", logo: "https://airmenusimages.blr1.cdn.digitaloceanspaces.com/brands/brands_46_1627040347.1501653.png" },
    { name: "Moti Mahal", logo: "https://motimahal.in/wp-content/uploads/2025/09/image-4-825x283.png" },
    { name: "Levis", logo: "https://fabrikbrands.com/wp-content/uploads/Levis-Logo-History-1b.png" },
    { name: "UCB", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW9pxZX1i_Nolyuv7P6AdGhA3mKHGIJxt2Ag&s" },
    { name: "Radisson Blu", logo: "https://images.seeklogo.com/logo-png/24/1/radisson-blu-logo-png_seeklogo-247458.png" },
    { name: "Behl Son Karol Bagh", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBpktGVDnnkXmiQsCoC-rlE_RDh5wZfk0b8g&s" },
    { name: "Handi Restaurant", logo: "https://content.jdmagicbox.com/v2/comp/delhi/r6/011pxx11.xx11.170524152904.r5r6/catalogue/handi-punjab-di-raj-nagar-extension-ghaziabad-delhi-north-indian-restaurants-ohf3fcgu5s.jpg" },
    { name: "Vedanta Salon", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGNPM8QLyT1pBgQzXn8MgVWdWc63hWSvYn-A&s" },
    { name: "EGC Kitchen", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThWSO-r1PRPsbLGEnGRm_N3jNMnMZNtLcgLg&s" },
    { name: "Army School", logo: "https://d3bat55ebwjhsf.cloudfront.net/schools/logos/1620/user_armypublicschool/309266500_411420127810375_2783939777201223094_n.jpg" },
    { name: "Sarthak Collection", logo: "https://sarthakfashionhouse.com/nimg/mnlogo.jpeg" },
    { name: "M3M", logo: "https://www.m3mrealty.com/blog/wp-content/uploads/2023/07/M3M-LOGO-1.png" },
    { name: "SN Enterprise", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=756,fit=crop,f=jpeg/dWxODl8wwWF1Ne6M/2-YbN410gq0DsZkvre.jpg" },
    { name: "Fogla Ashram", logo: "https://foglaashram.co/wp-content/uploads/2025/01/Untitled-design-5-e1740208822716.png" },
    { name: "Intec Electrical", logo: "https://www.intecelectrical.com.au/wp-content/uploads/2025/08/Intec-New-Logo-Colours_1-scaled.png" },
    { name: "Pearls Academy", logo: "https://www.lpsnoida.com/Content/Images/logo.png" },


  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-12 text-gray-800 uppercase tracking-wider">
          Our Valued Clients
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {allClients.map((client, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-4 rounded-lg shadow-sm border border-gray-200 h-32
              ${client.name === "Fogla Ashram" ? "bg-black" : "bg-white"}`}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-24 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlibdaFullPortfolio;
