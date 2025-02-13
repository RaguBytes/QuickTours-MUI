import { Box } from "@mui/material"
import TourCard from "./TourCard"
import belizeImage from '../assets/Belize-145.jpg'
import costaImage from '../assets/CostaMaya-59.jpg'
import granbyImage from '../assets/prod21.jpg'
import beachImage from '../assets/FLL Beach-34.jpg'

const Content = () => {

  const itemData = [
    {
      img: belizeImage,
      contentText: 'Discover Belize’s stunning beaches, ancient Mayan ruins, lush jungles, and vibrant marine life. Explore the world’s second-largest barrier reef, enjoy cave tubing, zip-lining, and wildlife spotting. Relax on tropical islands like Ambergris Caye or experience adventure in the rainforests. Whether seeking history, nature, or relaxation, Belize offers an unforgettable escape! 🌊🌞',
      starValue:'4',
      cardTitle:"Belize: A Tropical Paradise of Adventure & Relaxation 🌴🌊✨",
      cardAlt: 'Belize'
    },
    {
      img: granbyImage,
      contentText: 'Nestled in the heart of the Rocky Mountains, Granby offers stunning scenery, year-round outdoor adventures, and small-town charm. Enjoy skiing at Granby Ranch, hiking in Rocky Mountain National Park, fishing in pristine lakes, and wildlife spotting. A perfect escape for nature lovers and adventure seekers! ❄️🎣🚵‍♂️',
      starValue:'3',
      cardTitle:"Granby, Colorado: Gateway to the Rockies ⛰️🏞️",
      cardAlt: 'Granby Colorado'
    },
    {
      img: costaImage,
      contentText: 'Discover Costa Maya’s pristine beaches, ancient Mayan ruins, and vibrant marine life. Relax by the turquoise waters, explore the stunning Mahahual coastline, or dive into adventure with snorkeling, ATV tours, and jungle excursions. A perfect blend of history, nature, and relaxation awaits! ☀️🐠',
      starValue:'4',
      cardTitle:"Costa Maya: A Hidden Caribbean Gem 🌊🏝️",
      cardAlt: 'Costa Maya, Mexico'
    },
    {
      img: beachImage,
      contentText: 'Miami is a vibrant city known for its stunning beaches, lively nightlife, and rich cultural scene. Explore the Art Deco district in South Beach, enjoy Cuban flavors in Little Havana, or relax by the turquoise waters. With world-class shopping, entertainment, and outdoor adventures, Miami offers something for everyone! ☀️🏝️🎶',
      starValue:'5',
      cardTitle:"Miami, FL: The Magic City 🌴🌊✨",
      cardAlt: 'Miami Florida'
    }
  ];


  return (
    <Box flex={2} padding={3}>
      {
        itemData.map((item, index) => (
            <TourCard key={index} 
              contentText={item.contentText} 
              imageSrc = {item.img}
              cardTitle={item.cardTitle}
              cardAlt = {item.cardAlt}
              starValue={item.starValue} />
        ))

      }
    </Box>
  )
}

export default Content