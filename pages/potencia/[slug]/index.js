import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../../styles/Home.module.css';
import { useState } from 'react';
import Link from 'next/link';

const Post = () => {
  const router = useRouter()
  const { slug } = router.query
  const [estilo, setEstilo] = useState(['','','','','','','','','','',])
  const ListaNumeros =[ 1,2,3,4,5,6,7,8,9,10]
  const [valor, setValor] = useState(['','','','','','','','','','',]);
  

  function handleChange(e, nivel) {
    let tabela = [...valor];
    tabela[nivel-1]=(e)
    setValor(tabela)
    //console.log(tabela)
  }

  function onClickHandler(){
    let tabela = [...estilo];
    for (let i = 1; i <11 ; i++) {
      console.log(slug**i, valor[i-1])
      if (slug**i == valor[i-1]) {
        tabela[i-1]='✅';
        //console.log('Ok');
      }else{
        tabela[i-1]='❌';
        //console.log('Errado');
      }

    }
    setEstilo(tabela);
    console.log(tabela);
  }

  console.log(slug)

  return (
    <div className={styles.container}>
      <Head>
        <title>Exponenciação</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.App}>
        <div className={styles.Tabuada}>
          <div className={styles.Titulo}>Exponenciação</div>
            {
              ListaNumeros.map(nivel => 
                <div key={nivel} className={styles.LinhaPotencia}>
                  <div className={styles.TabuadaCard}>{slug}<sup>{nivel}</sup></div>
                  = 
                  <input id={nivel} type='number' onChange={(e) => handleChange(e.target.value, nivel)}/>
                  <div className={styles.correto}>{estilo[nivel-1]}</div>
                  
                </div>)
            }
        </div>
        <button onClick={onClickHandler}>Verificar </button>
        <Link href='../potencia'><div onClick=''>Voltar </div></Link>

      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Hugo Gama
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  
  )
}

export default Post