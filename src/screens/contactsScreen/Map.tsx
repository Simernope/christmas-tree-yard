import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const MapAddress = () => {
    const defaultState = {
        center: [56.782381, 60.541779],
        zoom: 12,
    };

    const placemarkGeometry = [56.782381, 60.541779];
    const placemarkBalloonContent = "Ваш адрес здесь"; // Замените это на желаемый адрес

    return (
        <section>
            <div className='text-2xl mb-5'>Мы находимся по адресу</div>
            <div className='text-lg mb-5'>Екатеринбург, Краснолесья 28</div>
            <YMaps>
                <Map defaultState={defaultState} height={'500px'} width={'full'}>
                    <Placemark geometry={placemarkGeometry} defaultState={{ balloonContent: placemarkBalloonContent }} />
                </Map>
            </YMaps>
        </section>

    );
}
