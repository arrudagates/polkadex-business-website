import RoadmapCard from 'components/RoadmapCard';
import Title from 'components/Title';

import * as S from './styles';

const Roadmap = () => (
  <S.Wrapper id="roadmap">
    <S.TitleContainer>
      <Title
        tag="Roadmap"
        description="We start a new journey with no return and now we do not think to stop"
        title="Polkadex"
        highlight="Journey"
        position="center"
      />
    </S.TitleContainer>
    <S.RoadContainer>
      <RoadmapCard
        title="Initiation"
        time="Q3 2020"
        alignRight
        position={{
          horizontal: {
            side: 'left',
            distance: 10,
          },
          vertical: {
            side: 'top',
            distance: -10.5,
          },
        }}
        content={[
          { title: 'Web3 Milestone #1', status: true },
          { title: 'Refactoring Polkadex Engine', status: true },
          { title: 'Code Documentation', status: true },
        ]}
      />
      <RoadmapCard
        title="Testnet"
        time="Q4 2020"
        position={{
          horizontal: {
            side: 'right',
            distance: 20,
          },
          vertical: {
            side: 'top',
            distance: 4,
          },
        }}
        content={[
          { title: 'Website Launch', status: true },
          { title: 'Whitepaper Release', status: true },
          { title: 'Testnet Launch', status: true },
          { title: 'SAFT based Token PreSale', status: true },
        ]}
      />
      <RoadmapCard
        title="Mainnet"
        time="Q1-Q2 2021"
        alignRight
        position={{
          horizontal: {
            side: 'left',
            distance: 13,
          },
          vertical: {
            side: 'top',
            distance: 28,
          },
        }}
        content={[
          { title: 'Security Audit', timeline: 'June 2021' },
          { title: 'Public Sale', timeline: 'April 2021' },
          { title: 'Mainnet Launch', status: false },
        ]}
      />
      <RoadmapCard
        title="Bridging"
        time="Q3-Q4 2021"
        position={{
          horizontal: {
            side: 'right',
            distance: 12,
          },
          vertical: {
            side: 'bottom',
            distance: 44,
          },
        }}
        content={[
          { title: 'Parachain Development', status: false },
          { title: 'Polkadot Crowdfunding', status: false },
          { title: 'Parachain Auction', status: false },
        ]}
      />
      <RoadmapCard
        title="Scale Up"
        time="Q1-Q3 2022"
        invert
        alignRight
        position={{
          horizontal: {
            side: 'left',
            distance: 20,
          },
          vertical: {
            side: 'bottom',
            distance: 12,
          },
        }}
        content={[
          { title: 'Margin/Lending', status: false },
          { title: 'Futures/Options', status: false },
          { title: 'Pebble Consensus Upgrade', status: false },
        ]}
      />
    </S.RoadContainer>
  </S.Wrapper>
);

export default Roadmap;