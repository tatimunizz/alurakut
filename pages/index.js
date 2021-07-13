import MainGrid from '../src/components/mainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/profileRelations'

function ProfileSideBar(propriedades) {
  return (
    <Box >
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }}/>
    </Box>
  )
}

export default function Home() {
  const user = 'tatimunizz';
const pessoasFavoritas = ['R1tter', 'anamonteiroo', 'brincher', 'anderleand', 'fduaibs', 'anthonyreis']



  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={user} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box >
            <h1 className="title">
              Bem Vindo(a)
            </h1>
            
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((user) => {
                return (
                  <li>
                    <a href={`/users/${user}`} key={user}>
                      <img src={`https://github.com/${user}.png`} />
                      <span>{user}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box >
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  )
};
