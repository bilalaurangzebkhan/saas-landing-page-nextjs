import acmeLogo from '@/assets/logo-acme.png'
import apexLogo from '@/assets/logo-apex.png'
import celestialLogo from '@/assets/logo-celestial.png'
import echoLogo from '@/assets/logo-echo.png'
import pulseLogo from '@/assets/logo-pulse.png'
import quantumLogo from '@/assets/logo-quantum.png'
import Image from 'next/image'

export const LogoTicker = () => {
  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className="container">
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] '>
          <div className='flex gap-14 flex-none'>
            <Image className='logo-ticker-img' src={acmeLogo} alt="Acme Logo" />
            <Image className='logo-ticker-img' src={apexLogo} alt="apex Logo" />
            <Image className='logo-ticker-img' src={celestialLogo} alt="celestial Logo" />
            <Image className='logo-ticker-img' src={echoLogo} alt="echo Logo" />
            <Image className='logo-ticker-img' src={pulseLogo} alt="pulse Logo" />
            <Image className='logo-ticker-img' src={quantumLogo} alt="quantum Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};
