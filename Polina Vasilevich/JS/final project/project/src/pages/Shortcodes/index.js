import React from "react";

import IntroSlider from "../../components/IntroSlider";

import CallToAction from "../../components/CallToAction";
import Footer from "../../components/Footer";

import { logo, contacts } from "../../assets/const/footerItems";
import { items } from "../../assets/const/copyRightItems";

class Shortcodes extends React.Component {
  render() {
    return (
      <>
        <IntroSlider title="CONTACT US" subTitle="Dream Big. Think Different" />
        <CallToAction
          text="Become A Part Of TheFox Business Community Today"
          buttonLabel="PURCHASE NOW"
          backgroundColorButton="#82b440"
          backgroundColorMainContainer = "#82b440"
          paddingTop ='0'
          paddingBottom='0'
          borderColorButton="#fff"
        />
        <Footer logo={logo} contacts={contacts} copyRight={items} />
      </>
    );
  }
}

export default Shortcodes;
