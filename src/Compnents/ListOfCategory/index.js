import React, { useState,  useEffect, Fragment } from 'react'
import { Category } from './../Category'
import { LoaderBox } from './../Loader';
import { List, Item } from './styles'

// Custom Hook
const useFecthCategoriesData  = () => {
    const [ categories, setCategories ] = useState([]);
    const [ loading, setLoagin ] = useState([false]);

    //Usando Hooks para asignar estado a un componente funcional
    useEffect(() => {
        setLoagin(true)
        fetch('https://petgram-server-alfredo-ax629ivyq.now.sh/categories')
        .then(res => res.json())
        .then(response =>{
            console.log(response);
            setCategories(response);
            setLoagin(false);
        });
    }, []);

    return { categories , loading }
}

const ListCategories = () => {

    //Uso del useState
    const [ showFixed, setShowFixed ] = useState(false);

    const { categories, loading } = useFecthCategoriesData();

    useEffect(() => {
        const onScroll = e => {
            const newScroll =  window.scrollY > 200
            showFixed !== newScroll && 
            setShowFixed(newScroll)
        }

        // Escuchando evento de scroll
        document.addEventListener('scroll', onScroll);

        // Removemos la suscripcion
        return () => document.removeEventListener('scroll', onScroll);
    },[showFixed]);

    const _loader = () => {
        return <LoaderBox />
    }

    const ListCategories = (fixed) => {
        return (
        <List fixed={fixed}>
            {
                loading 
                ? 
                <Item key="loading">
                    {_loader()}
                </Item>
                :
                categories.map( (categorie) =>{
                    return(
                        <Item key= {categorie.id} > 
                            <Category 
                            {...categorie}
                            />
                        </Item>
                    )
                })
            }
        </List>
        )
    }
    return(
        <Fragment>
            {ListCategories()}
            {showFixed && ListCategories(true)}
        </Fragment>    
    )
}

export default ListCategories
