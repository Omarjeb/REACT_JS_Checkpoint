import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const SwiperCard = () => {
  return (
    <Swiper style={{margin:"2%"}}
    spaceBetween={50}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
        <img src="https://files.porsche.com/filestore/image/multimedia/none/porscheservice-startbanner/normal/f59620c8-c993-11e5-8bd4-0019999cd470;sD;twebp065;c1356;gc/porsche-normal.webp" alt='404'/>
    </SwiperSlide>
    <SwiperSlide>
        <img src="https://files.porsche.com/filestore/image/multimedia/none/porscheservice-startbanner/normal/f59620c8-c993-11e5-8bd4-0019999cd470;sD;twebp065;c1356;gc/porsche-normal.webp" alt='404'/>
    </SwiperSlide>
    <SwiperSlide>
        <img src="https://files.porsche.com/filestore/image/multimedia/none/porscheservice-startbanner/normal/f59620c8-c993-11e5-8bd4-0019999cd470;sD;twebp065;c1356;gc/porsche-normal.webp" alt='404'/>
    </SwiperSlide>
    <SwiperSlide>
        <img src="https://files.porsche.com/filestore/image/multimedia/none/porscheservice-startbanner/normal/f59620c8-c993-11e5-8bd4-0019999cd470;sD;twebp065;c1356;gc/porsche-normal.webp" alt='404'/>
    </SwiperSlide>
    
  </Swiper>
  )
}

export default SwiperCard
