interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(prosp: GameBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={prosp.bannerUrl} alt="game 1" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{prosp.title}</strong>
        <strong className="text-zinc-300 text-sm block">
          {prosp.adsCount} anúncio(s)
        </strong>
      </div>
    </a>
  );
}
