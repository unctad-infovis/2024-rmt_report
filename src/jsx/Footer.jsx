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
              <h3>Watch the videos</h3>
              <div className="iframe_container youtube_iframe">
                <iframe
                  src="https://player.vimeo.com/video/1022047383?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="Review of Maritime Transport 2024: Navigating maritime chokepoints"
                />
                <script src="https://player.vimeo.com/api/player.js" />
              </div>
              <h4>Download the report video</h4>
              <ul>
                <li>
                  <a href="https://vimeo.com/1022047383" target="_blank" rel="noreferrer">English</a>
                  {', '}
                  <a href="https://trello.com/1/cards/66ea989dbf21c10916cdffb1/attachments/671bbf397473e9673f6787b6/download/RMT_French.mp4" target="_blank" rel="noreferrer">Français</a>
                  {', '}
                  <a href="https://trello.com/1/cards/66ea989dbf21c10916cdffb1/attachments/6717cbe5ba1d4adf22b43d40/download/RMT_Spanish.mp4" target="_blank" rel="noreferrer">Español</a>
                  {', '}
                  <a href="https://trello.com/1/cards/66ea989dbf21c10916cdffb1/attachments/6717cc0713e9a0526177d065/download/RMT_Arabic.mp4" target="_blank" rel="noreferrer">العربية</a>
                  {', '}
                  <a href="https://trello.com/1/cards/66ea989dbf21c10916cdffb1/attachments/6717cbf14fef798388c7b1e8/download/RMT_Chinese.mp4" target="_blank" rel="noreferrer">简体中文</a>
                  {', '}
                  <a href="https://trello.com/1/cards/66ea989dbf21c10916cdffb1/attachments/6717f4408702f714aec05406/download/RMT_Russian.mp4" target="_blank" rel="noreferrer">Русский</a>
                  {', '}
                  <a href="https://trello.com/1/cards/66ea989dbf21c10916cdffb1/attachments/6717f4627791536fa678c968/download/RMT_Portuguese.mp44" target="_blank" rel="noreferrer">Português</a>
                  {', '}
                  <a href="https://trello.com/1/cards/66ea989dbf21c10916cdffb1/attachments/6717f46dd04095240ee8e7ee/download/RMT_Kiswahili.mp4" target="_blank" rel="noreferrer">Kiswahili</a>
                  {', '}
                  <a href="https://trello.com/1/cards/66ea989dbf21c10916cdffb1/attachments/6717f478e550b873467fcd57/download/RMT_Urdu.mp4" target="_blank" rel="noreferrer">Urdu اردو</a>
                  {', '}
                  <a href="https://trello.com/1/cards/66ea989dbf21c10916cdffb1/attachments/6717f4577bf03fefc8ffb06b/download/RMT_Hindi.mp4" target="_blank" rel="noreferrer">Hindi हिंदी</a>
                  {', '}
                  <a href="https://trello.com/1/cards/66ea989dbf21c10916cdffb1/attachments/6717f44b00de797a3f7d0fd3/download/RMT_German.mp4" target="_blank" rel="noreferrer">Deutsch</a>
                </li>
              </ul>
              <h4>Watch the press conference</h4>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://www.youtube.com/embed/AYD39tO7VGM" title="Review of Maritime Transport 2024 press conference" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
              </div>
              <h4>Media assets</h4>
              <ul>
                <li>
                  <a href="https://vimeo.com/1022207903" target="_blank" rel="noreferrer">Press conference</a>
                </li>
                <li>
                  <a href="https://www.flickr.com/photos/unctad/albums/72177720321427679" target="_blank" rel="noreferrer">Photos</a>
                </li>
                <li>
                  <a href="https://www.unognewsroom.org/story/en/2395/unctad-press-conference-22-october-2024" target="_blank" rel="noreferrer">Audio and other assets</a>
                </li>
              </ul>
            </div>
            <div className="footer_content anchor_podcasts" id="anchor_podcasts">
              <h3>Podcasts</h3>
              <p>Listen to the Weekly Tradecast episodes that explore some of the main issues in the report</p>
              <div className="iframe_container">
                <iframe title="96. Rough seas ahead: How can global supply chains navigate shipping disruptions?" height="150" width="100%" style={{ border: 'none', minWidth: 'min(100%, 430px)' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=zix3p-161db2f-pb&btn-skin=009EDB&download=1&font-color=000000&fonts=Verdana&from=pb6admin&logo_link=none&rtl=0&share=1&size=240&skin=ffffff" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
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
