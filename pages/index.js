import React from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet
} from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(propriedades) {
  return (
    <Box>
      <img
        src={`https://github.com/${propriedades.githubUser}.png`}
        style={{ borderRadius: '8px' }}
      />
      <hr />
      <p>
        <a
          className="boxLink"
          href={`https://github.com/${propriedades.githubUser}`}
        >
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'walysson-silva'
  const [comunidades, setComunidades] = React.useState([
    {
      id: '14851485146',
      title: 'Cursos Online de Cibersegurança',
      image: 'https://media-exp1.licdn.com/dms/image/C4D0BAQFv4E-jhsn4XA/company-logo_200_200/0/1617885754927?e=1634774400&v=beta&t=CgqPykmgv7a0VaZ9LPYLhHq2rxv3wAg_k6BVoDLkWq4',
      site: 'https://cysource.com.br/'
    },
    {
      id: '26525626262',
      title: 'Cursando TSI',
      image: 'https://www.ifpb.edu.br/guarabira/noticias/2020/02/curso-superior-em-sistemas-para-internet-promove-aula-inaugural/whatsapp-image-2020-02-14-at-09-55-29.jpeg/@@images/61a2e4f8-5cd2-4e35-8ad1-3d4a0e775c29.jpeg',
      site: 'https://estudante.ifpb.edu.br/cursos/231/'
    },
    {
      id: '4544545525115',
      title: 'Alura Mergulhe em Tecnologia',
      image: 'https://www.alura.com.br/assets/img/alura-share.1617727198.png',
      site: 'https://www.alura.com.br/'
    },
    {
      id: '14851485146',
      title: 'JavaScript - Brazil',
      image: 'https://scontent.fnat6-1.fna.fbcdn.net/v/t1.6435-9/105575163_2995594297225352_6287318824515546785_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8631f5&_nc_ohc=NY80lWDyQl0AX91-3PP&tn=KFtysz6It3lxaaiG&_nc_ht=scontent.fnat6-1.fna&oh=c57cbb0de00ea82320fe5e7b1f09e042&oe=60F7F1C0',
      site: 'https://www.facebook.com/groups/javascriptbrazil'
    },
    {
      id: '148514851462255',
      title: 'Python Brasil',
      image: 'https://scontent.fnat6-1.fna.fbcdn.net/v/t1.6435-0/p180x540/45700980_101320234216543_4130232631361011712_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8631f5&_nc_ohc=kCf2usjnDeQAX-SHQ1Y&tn=KFtysz6It3lxaaiG&_nc_ht=scontent.fnat6-1.fna&oh=cc06c35fe4a7d302feb0f75913fe7a4e&oe=60F7C2DD',
      site: 'https://www.facebook.com/groups/pythonbr'
    },
    {
      id: '231566449854584',
      title: 'FrontEnd Brasil',
      image: 'https://scontent.fnat6-1.fna.fbcdn.net/v/t1.6435-9/61929341_2341096802882925_7691847674751877120_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8631f5&_nc_ohc=x8vp_WQabDAAX_uWV-l&_nc_ht=scontent.fnat6-1.fna&oh=370aea241cc9032c3df5541490eb9a67&oe=60F91CE8',
      site: 'https://www.facebook.com/groups/FrontEndBrasilAberto'
    }
  ])
  // const comunidades = comunidades[0]
  // const alteradorDeComunidades/setComunidades = comunidades[1]
  console.log('teste', comunidades)
  // const comunidades = ['Alurakut']

  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'maykbrito',
    'marcobrunodev',
    'Jakeliny'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="tittle">Bem vindo(a)
     
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form
              onSubmit={function handleCriaComunidade(e) {
                e.preventDefault()
                // console.log(e)
                const dadosDoForm = new FormData(e.target)
                console.log('Campo:', dadosDoForm.get('title'))
                console.log('Campo:', dadosDoForm.get('image'))

                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  site: dadosDoForm.get('site'),
                  image: dadosDoForm.get('image')
                }

                // comunidades.push('Alura Stars')
                const comunidadesAtualizadas = [...comunidades, comunidade]
                setComunidades(comunidadesAtualizadas)
                // console.log(comunidadesAtualizadas)
              }}
            >
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa?"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa?"
                />
              </div>
              <div>
                <input
                  placeholder="Endereço Web"
                  name="site"
                  aria-label="Endereço Web"
                />
              </div>

              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: 'profileRelationsArea' }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map(itemAtual => {
                return (
                  <li key={itemAtual}>
                    <a href={`https://github.com/${itemAtual}`} target='_blank'>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.slice(0, 6).map(itemAtual => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`${itemAtual.site}`} target='_blank'>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
