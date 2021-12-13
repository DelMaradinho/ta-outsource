import React from 'react';
import './Logo.scss';
import background from '../../img/logo-banner.png';
import Banner from '../UI/Banner';
import Wrapper from '../UI/Wrapper';
import BreadcrumbsList from '../UI/BreadcrumbsList';
import AboutService from '../UI/AboutService';
import BannerText from '../UI/BannerText';
import '../../styles/fonts.scss';
import '../../styles/mixins.scss';
import '../../styles/var.scss';
import Content from '../UI/Content';
import Subheading from '../UI/Subheading';
import LogoTypes from '../UI/LogoTypes';

const Logo = () => {
    return (
        <div className="logoPage">
            <Banner background={background} >
                <Wrapper>
                    <BannerText>
                        <BreadcrumbsList />
                        <AboutService title="Нанесение логотипов" description="На приобретенные у нас спецодежду, средства индивидуальной защиты – каску, очки или перчатки, а также головные уборы или трикотаж – мы предлагаем нанести логотип вашей компании или другие графические изображения." />
                    </BannerText>
                </Wrapper>
            </Banner>
            <Wrapper>
                <Content>
                    <p className="textParagraph">
                        Многие компании имеют свой корпоративный стиль одежды, который выражается в сочетании цветов и других фирменных элементов, среди которых главным является логотип компании.
                    </p>
                    <Subheading text="Мы предлагаем нанесение логотипов различными способами" />
                    <LogoTypes>
                        
                    </LogoTypes>
                </Content>
            </Wrapper>
        </div>
    )
}
export default Logo;