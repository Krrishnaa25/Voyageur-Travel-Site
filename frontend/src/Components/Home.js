import React from "react";
import "./Home.css";
import quote from "./images/Group 5.png";

function Home() {
  return (
    <>
      <div className="container">
        <div className="outer">
          <div className="details_">
            <img
              alt="quote"
              src={quote}
              style={{
                height: "350px",
                width: "350px",
                "margin-top": "170px",
                "margin-left": "200px",
                position: "absolute",
              }}
            />
          </div>
        </div>
      </div>

      <div className="blogs" style={{ position: "absolute" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="heading-blogs">BLOGS</div>
        <div className="container1">
          <div className="text1">
            <h1>KASHMIR</h1>
          </div>
        </div>
        <div className="blog1">
          <p>
            One of the most incredible places in India, Kashmir is known for its
            natural beauty and is thus, rightly called Heaven on Earth. With its picturesque lakes, lush fruit orchards, verdant
            meadows, pines and deodars forests, all enclosed with mountains of
            Himalayan and Pir-Panjal ranges – Kashmir seems to have directly
            made its way right out from a postcard. The beautiful Kashmir Valley is home to many destinations ideal for
            nature lovers, family vacationers, honeymooners, and even a group of
            friends. Along with great sightseeing opportunities, it offers
            adventure activities like trekking, skiing, and river rafting,
            recreational activities like fishing & angling, and even spa &
            wellness. Shopaholics and food lovers can also have their share of
            enjoyment as Kashmir spoils them with many options.
          </p>
        </div>
        <div className="container2">
          <div className="text2">
            <h1>SIKKIM </h1>
          </div>
        </div>
        <div className="blog2">
          <p>
            One of the most beautiful places in India, Sikkim is a glittering
            gem of the North-East Himalayas. This northeast Indian destination
            is popular for being home to the world’s third highest mountain,
            Kanchenjunga (8586 m). Sikkim is one of the best destinations in
            India to spend a peaceful and laid back holiday as well as enjoy
            enthralling adventure activities. Teeming with some of the world’s
            scenic trekking trails and rivers, this little northeastern state
            makes for a perfect adventure destination in India for trekkers,
            rafting enthusiasts, mountaineers and rock climbers. It is also
            famous for offering an experience of Yak Safari. Sikkim is also a
            perfect place to go for some meditation sessions at numerous old
            Buddhist monasteries. Don’t miss out on delicious Sikkimese
            delicacies and shop to your heart’s content and buy Sikkimese
            handicrafts, thangka paintings and mural items.
          </p>
        </div>
        <div className="container3">
          <div className="text3">
            <h1>KERALA</h1>
          </div>
        </div>
        <div className="blog3">
          <p>
            Pristine backwaters, coconut-palm fringed beaches, rejuvenating
            Ayurvedic massages and colourful festivals; Yes! You guessed it
            right. I am talking about God’s own country, Kerala. One of the most
            picturesque places in India with a footfall of thousands of tourists
            every year, Kerala is tucked between Arabian Sea and the Western
            Ghats and is blessed with immense natural beauty. Besides serene
            backwaters and pristine beaches, Kerala is also home to scenic hill
            stations and numerous wildlife sanctuaries. Offering an umpteen
            number of tourist activities, Kerala is a must-visit destination for
            every traveller. From memorable houseboat stays to nature walks
            through the sprawling tea gardens to wildlife safari to mesmerizing
            Kathakali performance to savouring traditional dishes, Kerala has a
            lot to offer.
          </p>
        </div>
        <div className="container4">
          <div className="text4">
            <h1>GOA</h1>
          </div>
        </div>
        <div className="blog4">
          <p>
            Known for its gorgeous beaches, stellar nightlife, delish seafood,
            world-heritage listed monuments, Goa is where all the fun is in
            India. Although the beaches of Goa are the primary tourism
            attractions, there are many surprises waiting to be unravelled. Goa
            has one of the best nightlife in India with trendy bars, beach
            shacks, elegant cafes and many clubs and discotheques. For those
            looking for a luxury stay, South Goa has many options. For the
            history buffs, Old Goa is replete with many whitewashed churches,
            crumbling forts and spectacular mansions. The adventure junkies are
            also spoilt for choice in Goa with a number of watersports including
            snorkelling and jet skiing. The beautiful and quiet settings of Goa
            also make it a great destination for yoga and Ayurveda.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
