import {Link} from 'react-router-dom'
import React from 'react';

const iframeStyles = {
    width: '100%',
    height: '100vh', // 100% da altura da janela
    border: 'none', // Para remover a borda padrão do iframe
};

export default function CommunityPage() {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
          <iframe src="https://godotengine.org/community/" style={iframeStyles}>
            Seu navegador não suporta iFrames.
          </iframe>
        </div>
    );
}

