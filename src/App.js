import React from 'react';
import ImageGallery from 'react-image-gallery';

import importAll from './utils/import-all';

import './App.css';

const images = importAll(require.context('../assets/gallery', false, /\.(png|jpe?g|svg)$/));

class App extends React.Component {
    render() {
        return <div className='App'>
            <ImageGallery images={}
        </div>;
    }
}

export default App;
