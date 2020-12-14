import React from 'react';
import '../css/map.css';

const Map = () => {
    return (
        <section className="map">
            <div><iframe src="https://yandex.by/map-widget/v1/-/CCUEF0S~~C" title="address" width="100%" height="400" border="none"></iframe></div>
        </section>
    );
};

export default Map;