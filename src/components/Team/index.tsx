import TeamCard from 'components/TeamCard';
import Title from 'components/Title';

import * as S from './styles';

const Team = () => (
  <S.Wrapper id="team">
    <S.TitleContainer>
      <S.TitleWrapper>
        <Title
          tag="Team"
          title="Part of our team"
          highlight="of 20+ motivated members"
          position="right"
        />
      </S.TitleWrapper>
    </S.TitleContainer>
    <S.Row>
      <TeamCard
        position="Executive Director"
        image="vivekPhotography"
        name="Vivek Prasannan"
        socialMedia={[
          {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/vivekprasannan/',
          },
        ]}
      />
      <TeamCard
        position="Chief Executive Officer"
        image="gauthamPhotography"
        name="Gautham J"
        socialMedia={[
          { name: 'github', link: 'https://github.com/Gauthamastro' },
          {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/gautham-j-a4a559133/',
          },
        ]}
      />
      <TeamCard
        position="Chief Operating Officer"
        image="deepanshPhotography"
        name="Deepansh Singh"
        socialMedia={[
          {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/deepanshconnect/',
          },
        ]}
      />
      <TeamCard
        position="Chief Marketing Officer"
        image="kseniiaPhotography"
        name="Kseniia Baziian"
        socialMedia={[
          {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/kseniia-baziian-98382652/',
          },
        ]}
      />
      <TeamCard
        position="Cryptoeconomic Advisor"
        image="matthiasPhotography"
        name="Matthias Hafner"
        socialMedia={[
          {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/matthias-hafner-26b069b8/',
          },
        ]}
      />
      <TeamCard
        position="Strategic Advisor"
        image="jasperPhotography"
        name="Jasper Byun"
        socialMedia={[
          { name: 'linkedin', link: 'https://www.linkedin.com/in/jasperb/' },
        ]}
      />
      <TeamCard
        position="Strategic Advisor"
        image="sherwinPhotography"
        name="Sherwin Lee"
        socialMedia={[
          {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/sherwin-lee-89735b153/',
          },
        ]}
      />
      <TeamCard
        position="Legal Counsel"
        image="zhiPhotography"
        name="Zhi Hao Loy"
        socialMedia={[
          { name: 'linkedin', link: 'https://www.linkedin.com/in/loyzhihao/' },
        ]}
      />
      <TeamCard
        position="Marketing Advisor"
        image="garlamPhotography"
        name="Garlam (가람) Won"
        socialMedia={[
          { name: 'linkedin', link: 'https://www.linkedin.com/in/garlam/' },
        ]}
      />
      <TeamCard
        position="Lead Community Manager"
        image="francisPhotography"
        name="Francis Dufour"
        socialMedia={[
          {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/francis-dufour-25357960/',
          },
        ]}
      />
      <TeamCard
        position="Senior Rust Engineer"
        image="mambisiPhotography"
        name="Mambisi Zempare"
        socialMedia={[
          {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/mambisi/',
          },
        ]}
      />
      <TeamCard
        position="Senior Rust Engineer"
        image="frankPhotography"
        name="Frank Li"
        socialMedia={[
          {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/frank-li-b6b388203/',
          },
        ]}
      />
      <TeamCard
        position="Senior Rust Engineer"
        image="gabrielPhotography"
        name="Gabriel Facco de Arruda"
        socialMedia={[
          {
            name: 'linkedin',
            link:
              'https://www.linkedin.com/in/gabriel-facco-de-arruda-00880787/',
          },
        ]}
      />
      <TeamCard
        position="Social Media Manager"
        image="pabloPhotography"
        name="Pablo Solanas Martin"
        socialMedia={[
          {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/pablosolanasmartin/',
          },
        ]}
      />
    </S.Row>
  </S.Wrapper>
);

export default Team;
