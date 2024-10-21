import React, { useEffect /* , useState, useRef */ } from 'react';
import '../styles/styles.less';

function Footer() {
  useEffect(() => {
    if (document.querySelector('.title_container .unctad_logo img')) {
      document.querySelector('.title_container .unctad_logo img').src = '/themes/custom/newyork_b5/images/logo_small_white_en.png';
    }
  }, []);

  return (
    <div className="app" id="app_footer">
      <div className="footer_container">
        <h2>What do you want to do next?</h2>
        <div className="footer_elements">
          <div className="footer_element footer_element_1">
            <div className="footer_content anchor_videos" id="anchor_videos">
              {/*<
              h3>Watch the videos</h3>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://www.youtube.com/embed/0iVoEdQ8rAc" title="Review of Maritime Transport 2024" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              */}
              {/*
              <ul>
                <li>
                  <a href="#download" target="_blank" rel="noreferrer">Français</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Español</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">العربية</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">简体中文</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Português</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Kiswahili</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Hindi हिंदी</a>
                </li>
              </ul>
              */}
              {/*
              <h4>Download the report video</h4>
              <ul>
                <li>
                  <a href="#download" target="_blank" rel="noreferrer">English</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Français</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Español</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">العربية</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">简体中文</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Português</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Kiswahili</a>
                  {', '}
                  <a href="#download" target="_blank" rel="noreferrer">Hindi हिंदी</a>
                </li>
              </ul>
              */}
              {/*
              <h4>Watch the press conference</h4>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://www.youtube.com/embed/w0H1eCzE0LY" title="Digital economy report 2024 press conference" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <h4>Download the video</h4>
              <ul>
                <li>
                  <a href="#download " target="_blank" rel="noreferrer">English</a>
                </li>
              </ul>
              */}
            </div>
            <div className="footer_content anchor_podcasts" id="anchor_podcasts">
              <h3>Podcasts</h3>
              <p>Listen to the Weekly Tradecast episodes that explore some of the main issues in the report</p>
              <div className="iframe_container">
                <iframe title="96. Rough seas ahead: How can global supply chains navigate shipping disruptions?" height="150" width="100%" style={{ border: 'none', minWidth: 'min(100%, 430px)' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=zix3p-161db2f-pb&btn-skin=009EDB&download=1&font-color=000000&fonts=Verdana&from=pb6admin&logo_link=none&rtl=0&share=1&size=240&skin=ffffff" allowFullScreen />
                <span className="text"><a href="/podcast/rough-seas-ahead-how-can-global-supply-chains-navigate-shipping-disruptions">Rough seas ahead: How can global supply chains navigate shipping disruptions</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
