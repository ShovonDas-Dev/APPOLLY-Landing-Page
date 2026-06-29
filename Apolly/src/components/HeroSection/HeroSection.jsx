
import HeroCart from '../HeroSection/HeroCart';
import WalletCard from '../HeroSection/WalletCard';

const HeroSection = () => {
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 items-center " >
      <div className="px-4 py-2 md:py-8 font-my-font">
        <HeroCart/>
      </div>
      <div >
        <WalletCard/>
      </div >
    </div>

  )
}

export default HeroSection
