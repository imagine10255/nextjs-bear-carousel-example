'use client'

import BearCarousel, {BearSlideCard} from 'bear-react-carousel';
import "bear-react-carousel/dist/index.css";


export default function Carousel() {
    const images = [
        { id: 1, imageUrl: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg" },
        { id: 2, imageUrl: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg" },
        { id: 3, imageUrl: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg" }
    ];
    const bearSlideItemData = images.map((row) => {
        return {
            key: row.id,
            children: <BearSlideCard bgUrl={row.imageUrl} />
        };
    });

    return <BearCarousel data={bearSlideItemData} height="400px" />;
}
