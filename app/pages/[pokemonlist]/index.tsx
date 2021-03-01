import {useRouter} from "next/router";
import Link from "next/link"
import Head from 'next/head'

const pokemonList =()=>{

    //routerオブジェクトを用意
    const router = useRouter();

    console.log("ポケモンリストインデックス");

    return (
        
        <div>
            <Head>
                <title>{router.query.pokemonlist}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/*routerオブジェクトでクエリストリングを取り出す */}
            {router.query.pokemonlist}'s Pokemon

            <ul>
                {
                    pokemons.map( 
                        pokemon => {
                            return (
                            <div key={pokemon.id}>
                                <Link href={`/${router.query.pokemonlist}/[pokemon]`} as ={`/${router.query.pokemonlist}/${pokemon.id}`}>
                                <a>{pokemon.name}</a>
                                </Link>            
                            </div>
                            );
                        }
                    )
                }
            </ul>
        </div>
        
    );
}

export default pokemonList

const pokemons = [
    {id:1,name:"フシギダネ"},
    {id:2,name:"フシギソウ"},
    {id:3,name:"フシギバナ"},
    {id:4,name:"ヒトカゲ"},
    {id:5,name:"リザード"},
    {id:6,name:"リザードン"},
    {id:7,name:"ゼニガメ"},
    {id:8,name:"カメール"},
    {id:9,name:"カメックス"},
    {id:10,name:"キャタピー"},
    {id:11,name:"トランセル"},
    {id:12,name:"バタフリー"}
];