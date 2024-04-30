
import React, { useEffect, useState} from 'react'

function App() {
  
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(()=>{

    async function fetchData(){
      const url = process.env.REACT_APP_API_URL + '/transactions';
      const response = await fetch(url);
      const result = await response.json();
      // console.log(result);
      return result;
    }
    
    fetchData().then(transactions => setTransactions(transactions));
    
    // setTransactions(fetchData());

    
    
  }, []); // render transactions once when component mounts



  const handleSubmit = (e) => {
   e.preventDefault();
   const url = process.env.REACT_APP_API_URL + '/transaction';
   const price = name.split(' ')[0];
  //  console.log(url);
    fetch(url, {
      method: 'POST',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify({
        price,
        name:name.substring(price.length + 1),         
        description, 
        datetime})
    }).then(res => res.json().then((json)=>{
      
      setName('');
      setDatetime('');
      setDescription('');
      
      
      console.log(json)}));
  }
  let balance = 0;
  for(const transaction of transactions){
    balance = balance + transaction.price;
    
  }
  balance = balance.toFixed(2);
  const fraction = balance.split('.')[1];
  balance = balance.split('.')[0];  
  return (
    <main>
      <h1>RS {balance}<span>.{fraction}</span></h1>
      <form onSubmit={handleSubmit}>

        <div className='basic'>
            <input type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='+20000 new samsung tv'/>
            <input type="datetime-local"
                value={datetime}
                onChange={e=>setDatetime(e.target.value)}
            />
        </div>

        <div className='description'>
            <input type="text" placeholder='description'
            onChange={e=>setDescription(e.target.value)}/>
        </div>
        
        <button>Add new transaction</button>
        {/* {transactions.length} */}
      </form>

      <div className='transactions'>
        {transactions.length > 0 && transactions.map((transaction, index)=>(
          
            <div key={index} className='transaction'>
              <div className="left">
                <div className="name">{transaction.name}</div>
                <div className='description'>{transaction.description}</div>
              </div>

              <div className="right">
                <div className={"price " + (transaction.price > 0 ? "green" : "red")
              }> {'RS ' + transaction.price}</div>
                <div className="datetime">{transaction.datetime}</div>
              </div>
            </div>


        ))}

      </div>
    </main>
  )
}

export default App