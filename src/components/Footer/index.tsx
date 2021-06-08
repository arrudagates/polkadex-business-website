import Icon from 'components/Icon';
import Logo from 'components/Logo';

import * as S from './styles';

const Footer = () => (
  <S.Wrapper>
    <S.Row>
      <S.Col>
        <Logo />
      </S.Col>
      <S.Col>
        <div>
          <h5>Polkadex</h5>
          <ul>
            <li>
              <a href="#hero">Overview</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#roadmap">Roadmap</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#tokenEconomics">Token Economics</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Community</h5>
          <ul>
            <li>
              <a href="https://web3.foundation/">Web3 Foundation</a>
            </li>
            <li>
              <a href="https://www.polkadot.network/">Polkadot</a>
            </li>
          </ul>
        </div>
      </S.Col>
      <S.Col>
        <div>
          <h5>Resources</h5>
          <ul>
            <li>
              <a href="https://docs.polkadex.trade/">Documentation</a>
            </li>
            <li>
              <a href="https://github.com/Polkadex-Substrate">
                Github Repository
              </a>
            </li>
            <li>
              <a href="https://www.substrate.io/">Substrate</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Products</h5>
          <ul>
            <li>
              <a href="https://docs.polkadex.trade/orderbookIntroduction">
                Polkadex Orderbook
              </a>
            </li>
            <li>
              <a href="/">Polkadex IDO</a>
            </li>
          </ul>
        </div>
      </S.Col>
      <S.Col>
        <h5>Company</h5>
        <ul>
          <li>
            <a href="/">Brand Assets</a>
          </li>
        </ul>
      </S.Col>
      <S.Col />
    </S.Row>
    <S.Row>
      <S.Col>
        <span>Copyright © 2021 Polkadex, Inc.</span>
        <ul>
          <li>
            <a href="/">Terms</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
        </ul>
      </S.Col>
      <S.Col>
        <Icon
          name="Twitter"
          alt="Twitter Logo"
          link="https://twitter.com/polkadex"
        />
        <Icon
          name="Medium"
          alt="Medium Logo"
          link="https://polkadex.medium.com/"
        />
        <Icon
          name="Telegram"
          alt="Telegram Logo"
          link="https://t.me/Polkadex"
        />
        <Icon
          name="Youtube"
          alt="Youtube Logo"
          link="https://www.youtube.com/channel/UC6fXRDT4lLKlXG3gP0PP06Q"
        />
        <Icon
          name="LinkedIn"
          alt="Linkedin Logo"
          link="https://www.linkedin.com/company/69690544"
        />
        <Icon
          name="Reddit"
          alt="Reddit Logo"
          link="https://www.reddit.com/r/polkadex"
        />
      </S.Col>
    </S.Row>
  </S.Wrapper>
);

export default Footer;
