import {useEffect, useState} from 'react';
import {Button, Image, Typography} from 'antd';
import {Link as ScrollLink} from 'react-scroll';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import LeadsForm from '../../components/LeadsForm/LeadsForm';
import styles from './LandingPage.module.scss';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import PageSeo from '../../components/SEO/PageSeo';
import bannerImg from '../../assets/images/banner-img-1.jpeg';
import padelPlayer from '../../assets/images/padel-player.svg';
import Info from "../../components/Info/Info";

const LandingPage = () => {
    const [contactInfoVisible, setContactInfoVisible] = useState(true);
    const images = [
        'https://www.bnlitalymajorpremierpadel.com/media_contents/news/146413/main/20220522_Campo_padel_MONDO_superficie.jpg',
        'https://cdn.record.pt/images/2023-12/img_476x268$2023_12_08_08_14_23_2198719.jpg',
        'https://agrupamentoidanha.com/wp-content/uploads/2023/03/p3.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8RbRTc5EL3XV5mcWahmyTwRYm87O3xV7rQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSBQ8yrlc_dSgUJe3BcoNFZnvt-julIPF02oVOzJuVlL9KVgIw8rGsee9vkRr96d9xcSY&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLMPH7DsZSPjzm1IwuKv4lVNfuKqcWC2RIg&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqax2mB1rS0_MuvHWJsJU9qwyGtOsUfzYgLA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7fcg8ni4G0Tme3NsPKIyzOJdlvaJrlhvd-w&s',
        'https://openpadelstore.com/wp-content/uploads/2022/06/cabecera.jpg',
    ];

    const handleScroll = () => {
        if (window.scrollY > 60) {
            setContactInfoVisible(false);
        } else {
            setContactInfoVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const pageTitle = 'Astra Padel - A tua jornada de padel começa aqui.';
    const pageDescription =
        'Descobre o melhor clube de padel da região. Courts modernos, treinadores experientes, eventos sociais e muito mais.';
    const siteUrl = 'https://www.astrapadel.pt';
    const imageUrl = 'https://www.astrapadel.pt/banner-img.jpg'; // Substitua com a URL da imagem do banner
    const imageAlt = 'Astra Padel Banner Image';

    return (
        <>
            <PageSeo
                title={pageTitle}
                description={pageDescription}
                imageUrl={imageUrl}
                imageAlt={imageAlt}
                siteUrl={siteUrl}
            />
            <div className={styles.root}>
                <div className={`${styles.contactInfo} ${!contactInfoVisible ? styles.hidden : ''}`}>
                    <ContactInfo/>
                </div>
                <Navbar/>
                <div className={`tw-relative ${styles.banner}`}>
                    <div className={styles.imageBackground}/>
                    <Image
                        className={`${styles.bannerImage}`}
                        height={'80vh'}
                        width={'100vw'}
                        preview={false}
                        src={bannerImg}
                    />
                    <div
                        className={`tw-z-[2] tw-absolute tw-w-full tw-text-white tw-text-start tw-grid tw-grid-cols-1 md:tw-grid-cols-6 tw-gap-6 tw-bottom-16 md:tw-bottom-12 tw-px-4 md:tw-px-0`}
                    >
                        <Typography.Title className="tw-mt-4 md:tw-ml-[2rem] md:tw-col-span-8"
                                          style={{color: 'white', fontSize: '35px'}}>
                            The Court is Yours
                        </Typography.Title>
                        <div
                            className={`md:tw-col-span-8 md:tw-col-end-7 md:tw-ml-[2rem] tw-pb-4 tw-flex tw-flex-col md:tw-flex-row tw-gap-2 md:tw-gap-2.5 tw-items-start md:tw-items-end`}
                        >
                            <Button
                                style={{minWidth: "162px"}}
                                className="!tw-text-black"
                                href={
                                    "https://playtomic.io/tenant/17522450-b8a8-400f-9c5b-4ce51ce7d85a?utm_source=app_ios&utm_medium=shareutm_source=app_ios&utm_medium=share"
                                }
                            >
                                Agendar Campo
                            </Button>
                            <ScrollLink to="schedule" smooth={true} duration={500} offset={-40}>
                                <Button
                                    style={{minWidth: "162px"}}
                                    className="tw-bg-transparent"
                                >
                                    Mais informação
                                </Button>
                            </ScrollLink>
                        </div>

                    </div>
                </div>
                <div
                    id="about"
                    className={`tw-bg-white tw-text-white tw-grid tw-grid-cols-1 tw-gap-0 md:tw-grid-cols-6 md:tw-gap-6 tw-text-start tw-pt-12 tw-px-[2rem] tw-mx-[-2rem]`}
                >
                    <div className="md:tw-col-span-3">
                        <Typography.Title level={1} className="tw-mb-4 tw-mt-4" style={{color: 'black'}}>
                            Uma nova experiência de Padel
                        </Typography.Title>
                        <Typography.Text className="tw-mb-4 tw-mt-4" style={{color: 'black'}}>
                            O Astra Padel é muito mais do que apenas um clube de padel. A nossa missão é promover a
                            paixão
                            pelo padel e oferecer uma experiência desportiva completa de alta qualidade para todos os
                            nossos
                            membros. O conceito do Astra Padel passa pelo reforço da ligação entre o desporto e os
                            momentos
                            de lazer.
                        </Typography.Text>
                    </div>
                    <div className="tw-mt-[-2rem] md:tw-col-span-3 md: tw-mt-0">
                        <Image
                            className={`${styles.padelPlayerImg}`}
                            height={'450px'}
                            width={'100%'}
                            preview={false}
                            src={padelPlayer}
                        />
                    </div>
                </div>
                <div className="tw-mt-[-4rem] tw-mx-[-2rem] md:tw-mt-0">
                    <Info/>
                </div>
                <div
                    id="schedule"
                    className={`tw-grid tw-grid-cols-1 md:tw-grid-cols-6 tw-gap-6 tw-text-start tw-py-8 tw-px-4 md:tw-px-0`}
                >
                    <div className="tw-mb-4 tw-mt-4 md:tw-col-span-3">
                        <Typography.Title level={1} className="tw-mt-0">
                            Torna-te membro fundador e ganha vantagens!
                        </Typography.Title>
                        <Typography.Text>
                            Juntar-se ao nosso clube é totalmente gratuito. O que oferecemos? À medida que joga no Astra
                            Padel ganhará jogos totalmente gratuitos. Para além disso, receberá todas as novidades do
                            nosso clube, será o primeiro a saber dos nossos torneios, eventos sociais e receberá todas
                            as outras vantagens que temos para oferecer.
                        </Typography.Text>
                    </div>
                    <div id="form" className="tw-mb-4 tw-mt-4 md:tw-col-span-3">
                        <LeadsForm/>
                    </div>
                </div>
                <ImageGallery images={images}/>
                <Footer/>
            </div>
        </>
    );
};

export default LandingPage;
