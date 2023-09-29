export{};
// import React from 'react'


// const SearchBar = () => {
//         const [input, setInput] = useState("");
//     // console.log(input);

//     const fetchData = (val) => {
//         fetch("").then((res) => {
//             return res.json();
//             // return console.log(res.json());
//         }).then((json) => {
//             // return console.log(json);
//             const results = json.filter((user) => {
//                 return (val && user && user.name && user.name.toLowerCase().includes(val));
//             })
//             console.log(results);
//             setResult(results);
//         })
//     }

//     const handleInput = (val) => {
//         setInput(val);
//         fetchData(val);
//     }
//     return (
//         <div className='input-wrapper'>
//             <input 
//             type="text"
//             placeholder='add search word...'
//             value={input}
//             onChange={(e) => handleInput(e.target.value)}
//             />
//         </div>
//     )
// }

// export default SearchBar