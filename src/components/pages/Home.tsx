import { FC, useState } from "react";

export const Home = () => {
    const [result, setResult] = useState([]);
    return(
        <div className='App'>
        <h1 className='section_ttl'>＊＊＊ドイツ語鑑定＊＊＊</h1>
        {/* ドイツ語入力 */}
        <div className='input_section'>
          <label htmlFor="german_input">ドイツ語を入力</label>
          <input type="text" id='german' />
          <button type="submit" onSubmit={() => {}}>！！鑑定！！</button>
        </div>
        {/* 検索機能 */}
        <div className='search_section'>
          <label htmlFor="search">生成したドイツ語を検索</label>
          {/* <SearchBar setResult={setResult}/>
          <SearchResult result={result}/> */}
        </div>
        <div>
          <ul className='section_list'>
            <li className='section_item'>
              <p>tkg</p>
              <p>schwarz</p>
              <span>96点</span>
            </li>
            <li className='section_item'>
              <p>joe</p>
              <p>eueu</p>
              <span>43点</span>
            </li>
            <li className='section_item'>
              <p>gabriel</p>
              <p>aiupor</p>
              <span>37点</span>
            </li>
            <li className='section_item'>
              <p>gabriel</p>
              <p>feuger</p>
              <span>79点</span>
            </li>
            <li className='section_item'>
              <p>gabriel</p>    
              <p>feuger</p>
              <span>79点</span>
            </li>
            <li className='section_item'>
            <p>gabriel</p>
              <p>feuger</p>
              <span>79点</span>
            </li>
            <li className='section_item'>
            <p>gabriel</p>
              <p>feuger</p>
              <span>79点</span>
            </li>
            <li className='section_item'>
            <p>gabriel</p>
              <p>feuger</p>
              <span>79点</span>
            </li>
            <li className='section_item'>
            <p>gabriel</p>
              <p>feuger</p>
              <span>79点</span>
            </li>
            <li className='section_item'>
            <p>gabriel</p>
              <p>feuger</p>
              <span>79点</span>
            </li>
            <li className='section_item'>
            <p>gabriel</p>
              <p>feuger</p>
              <span>79点</span>
            </li>
          </ul>
        </div>
      </div>
    )
}