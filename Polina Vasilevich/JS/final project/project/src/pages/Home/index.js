import React from "react";

import IconsList from '../../components/IconsList';
import iconList1 from "../../assets/const/iconList1";
import iconList2 from "../../assets/const/iconList2";

import Introducing from "../../components/Introducing";
import Photos from "../../components/Photos";
import Partners from "../../components/Partners";
import PricingTables from "../../components/Prices";
import Blog from "../../components/Blog";
import CallToAction from "../../components/CallToAction";
import Numbers from "../../components/Numbers";


import TwoColumnSection from "../../components/TwoColumSection";
import Percents from "../../components/PercentsBlock";
import TextList from "../../components/TextList";
import TextWithImages from "../../components/TextWithImages";
import Video from '../../components/VideoComponent';
import Footer from "../../components/Footer";


import introducingItems from "../../assets/const/introducingItems";
import portfolioItems from "../../assets/const/portfolioItems";

import servicesItems from "../../assets/const/servicesItems";
import partnersItems from "../../assets/const/partnersItems";
import pricingTables from "../../assets/const/pricingTables";
import businessItems from "../../assets/const/businessItems";
import blogItems from "../../assets/const/blogItems";
import numbersItems from "../../assets/const/numbersItems";
import { logo, contacts } from "../../assets/const/footerItems";
import { items } from "../../assets/const/copyRightItems";
import videoItems from '../../assets/const/videoItems';

const firstItemForService = (
  <TextList items={servicesItems.leftContent} backgroundColorMainContainer='#1f252f'/>
);

const secondItemForService = (
    <IconsList items={servicesItems.rightContent} 
      paddingLeftRight='5%'
      gridGap='4%' 
      widthItemGridContainer='250px'
    />
);

const firstItemForBusiness = (
  <TextWithImages items={businessItems.leftContent} />
);

const secondItemForBusiness = (
  <Percents items={businessItems.rightContent} backgroundColorMainContainer='#1f252f'/>
);

class Home extends React.Component {
  render() {
    return (
      <>
        <IconsList items={iconList1} 
        gridGap='4%' 
        widthItemGridContainer='200px' 
        formIcons='circle'
        gradientColorFormIcon/>
        
        <Introducing
          items={introducingItems}
          buttonBackgroundColor="#4285f4"
          buttonBorderColor="#2c6cd6"
        />

        <Photos items={portfolioItems} numberGridColumns="4" />

        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          backgroundColorButton='#82b440'
          borderColorButton='#fff'
        />

        <IconsList items={iconList2} 
          gridGap='4%' 
          widthItemGridContainer='350px'
          colorIcon='gradient'
          positionTextIcons='left'
          positionIcons='left'
          fontSizeIcon='42px'
        />

        <Introducing
          items={introducingItems}
          buttonBackgroundColor="#4285f4"
          buttonBorderColor="#2c6cd6"
          positionBlock="right"
        />

        <Numbers items={numbersItems} />

        <TwoColumnSection
          sizeContainers="45% 55%"
          firstItem={firstItemForService}
          secondItem={secondItemForService}
        />

        <Partners items={partnersItems} />

        <PricingTables
          items={pricingTables}
          buttonLabel="GET STARTED NOW"
        />

        <Video items={videoItems}/>
        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          backgroundColorButton='#82b440'
          borderColorButton='#fff'
        />

        <TwoColumnSection
          sizeContainers="55% 45%"
          firstItem={firstItemForBusiness}
          secondItem={secondItemForBusiness}
        />

        <Blog items={blogItems} />

        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          backgroundColorButton='#82b440'
          borderColorButton='#fff'
        />

        <Footer logo={logo} contacts={contacts} copyRight={items} />
      </>
    );
  }
}

export default Home;
