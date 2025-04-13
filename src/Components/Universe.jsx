import React from 'react';
import InfiniteMenu from '../bits/InfiniteScroll';
import SplashCursor from '../bits/SplashCursor';
import Iridescence from '../bits/Iridescence';

const Universe = () => {
    const items = [
        {
            image: 'https://picsum.photos/300/300?grayscale',
            link: 'https://google.com/',
            title: 'Item 1',
            description: 'This is pretty cool, right?'
        },
        {
            image: 'https://picsum.photos/400/400?grayscale',
            link: 'https://google.com/',
            title: 'Item 2',
            description: 'This is pretty cool, right?'
        },
        {
            image: 'https://picsum.photos/500/500?grayscale',
            link: 'https://google.com/',
            title: 'Item 3',
            description: 'This is pretty cool, right?'
        },
        {
            image: 'https://picsum.photos/600/600?grayscale',
            link: 'https://google.com/',
            title: 'Item 4',
            description: 'This is pretty cool, right?'
        }
    ];

    return (
        <div className='bg-dark'>
            {/* LiquidChrome Centered with Text */}
            {/* <div className="d-flex justify-content-center align-items-center" style={{ height: '200px', position: 'relative' }}>
                <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                    <Iridescence
                        color={[1, 1, 1]}
                        mouseReact={false}
                        amplitude={0.1}
                        speed={1.0}
                    />
                
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: '#1a1a1a',
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 2,
                            textShadow: '0 0 15px rgba(255, 255, 255, 0.6)'
                        }}
                    >
                        First time in India
                    </div>
                </div>
            </div> */}

            {/* InfiniteMenu Section */}
            <div className='bg-dark' style={{ height: '600px', position: 'relative' }}>
                <InfiniteMenu items={items} />
            </div>
        </div>
    );
};

export default Universe;
