import React, { useEffect, useRef, useState, Fragment } from 'react';
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMG = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
    
    // Uso del Ref 
    const ref = useRef(null);
    const [ show, setShow ] = useState(false);

    useEffect(() => {
        //import dinamico
        import('intersection-observer')
            .then(() => {
                const Observer = new 
                window.IntersectionObserver( entries => {
                    const { isIntersecting } = entries[0];
                    console.log(isIntersecting);
                    if (isIntersecting) {
                        setShow(true);
                        Observer.disconnect();
                    }
                });
                Observer.observe(ref.current);
            })
    },[ref])

    return(
       <Article ref={ref}>
           {
               show && <Fragment>
                 <a href={`/detail/${id}`}>
                <ImgWrapper>
                    <Img src={src} />
                </ImgWrapper>
           </a>
           <hr />
           <Button>
                <MdFavoriteBorder size='32px' />{ likes } Likes!
           </Button>
           <br></br>

               </Fragment>
           }
       </Article>
    );
}

