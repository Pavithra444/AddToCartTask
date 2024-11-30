
import React from 'react';
 

const Banner = ({ imageUrl, altText }) => {
  return (
    <div className="banner">
      <div className='shop_name'>SRI KUMARAN SILKS</div>
      <img src="https://scontent.fmaa12-1.fna.fbcdn.net/v/t39.30808-6/465782728_9197799436948979_4776492823089837779_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=PvUSOTm1jSgQ7kNvgGKFVhz&_nc_zt=23&_nc_ht=scontent.fmaa12-1.fna&_nc_gid=A1_aDJNtnZ_iAJjF3JoqIsb&oh=00_AYBJT1hImlSuuHSY4qASQcCjXBWYTej3DQAdPCDBWPytAw&oe=674F2CCA" alt={altText} className="banner-image" />
      
    </div>
  );
};

export default Banner;