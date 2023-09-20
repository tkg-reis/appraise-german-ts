import './App.css'

function App() {

  return (
    <>
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
          <input type="text" id='search' />
          <button type="submit" onSubmit={() => {}}>検索</button>
        </div>
        <div>
          <ul className='section_list'>
            <li className='section_item'>
              <p>schwarz</p>
              <span>96点</span>
            </li>
            <li className='section_item'>
              <p>eueu</p>
              <span>43点</span>
            </li>
            <li className='section_item'>
              <p>aiupor</p>
              <span>37点</span>
            </li>
            <li className='section_item'>
              <p>feuger</p>
              <span>79点</span>
            </li>
            <li className='section_item'>
              <p>feuger</p>
              <span>79点</span>
            </li>
            <li className='section_item'>
              <p>feuger</p>
              <span>79点</span>
            </li>
            <li className='section_item'>
              <p>feuger</p>
              <span>79点</span>
            </li>
            <li className='section_item'>
              <p>feuger</p>
              <span>79点</span>
            </li>
            <li className='section_item'>
              <p>feuger</p>
              <span>79点</span>
            </li>
            <li className='section_item'>
              <p>feuger</p>
              <span>79点</span>
            </li>
            <li className='section_item'>
              <p>feuger</p>
              <span>79点</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
