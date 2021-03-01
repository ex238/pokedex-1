import {useRouter} from "next/router";
import Head from 'next/head'
import {useState, useEffect} from 'react';


const Pokemon =()=>{

    //routerオブジェクトを用意
    const router = useRouter();

    console.log("クエリストリング");
    console.log(router.query.pokemon);

    //react hook
    const [pokemons,setPersons] = useState([]);

    useEffect(
        ()=>{
            async function loadData(){
                const response = await fetch('http://localhost:3000/pokemons');
                const pokemonsInfo = await response.json();
                setPersons(pokemonsInfo);
            }
        //コンポーネントのレンダリングの直前に実行s
        loadData();

    },[]);//マウント・アンマウント時に必ず実行

    var num = Number(router.query.pokemon) - 1;
    let imageSrc = "/pokemon.json-master/pokemon_dot/" + (router.query.pokemon) + ".png";

    if(!pokemons[num]){
        console.log("now loading");
        return(
            <div>loading....</div>
        );
    }

    return (
        <div>
            <Head>
                <title>{router.query.pokemon}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*routerオブジェクトでクエリストリングを取り出す */}
            <img src={imageSrc} alt="" />
            <pre>No.{router.query.pokemon}</pre>
            <pre>{pokemons[num].name.japanese}</pre>
            <pre>HP:{pokemons[num].base.HP}</pre>
            <pre>こうげき:{pokemons[num].base.Attack}</pre>
            <pre>ぼうぎょ:{pokemons[num].base.Defense}</pre>
            <pre>とくこう:{pokemons[num].base.SpAttack}</pre>
            <pre>とくぼう:{pokemons[num].base.SpDefense}</pre>
            <pre>すばやさ:{pokemons[num].base.Speed}</pre>

        </div>
    );
}

export default Pokemon