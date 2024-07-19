import React, { useState } from 'react'
import '../css/currency.css';
import { TbArrowsMoveHorizontal } from "react-icons/tb";
import axios from 'axios'; 


let BASE_URL="https://api.freecurrencyapi.com/v1/latest";
let API_KEY="fca_live_N0QSYf9SAiTzRUCgq2zay4ua0btfQfLhVG9nrZan";
let EXCHANGE_API=`${BASE_URL}`

function Currency() {

  const [amount,SetAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY');
  const [result, setResult] = useState(0);
  const exchange = async () => {

const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
const result= (response.data.data[toCurrency]* amount).toFixed(3);
setResult(result);


  }

  return (
    <div className='currency-div'>
      <div style={{fontFamily:'arial', background:'#8C6C47', borderRadius:'30px',color:'#fff', width:'100%', textAlign:'center'}}>
        <h3>Exchange</h3>
      </div>
      <div>
      <div style={{marginTop:'30px', border: '1px solid black', borderRadius: '30px', background: '#8C6C47', alignItems: 'flex-start', display:'flex'}}>
      <input style={{borderRadius:'20px',textAlign:'center'}}
      value={amount}
      onChange={(e)=>SetAmount(e.target.value)}
      type="number" className='amount'/> 
        <select onChange={(e => setFromCurrency(e.target.value))}className='from-currency-option'>
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
            <option>AUD</option>
            <option>CAD</option>
            <option>CHF</option>
            <option>GBP</option>
            <option>CZK</option>
            <option>JPY</option>
            <option>PLN</option>
            <option>RUB</option>
            <option>BGN</option>
        </select>


        <TbArrowsMoveHorizontal style={{fontSize:'25px', marginRight:'10px', color:'white'}}/>


        <select  onChange={(e => setToCurrency(e.target.value))} className='to-currency-option'>
            <option>TRY</option>
            <option>EUR</option>
            <option>USD</option>
            <option>AUD</option>
            <option>CAD</option>
            <option>CHF</option>
            <option>GBP</option>
            <option>CZK</option>
            <option>JPY</option>
            <option>PLN</option>
            <option>RUB</option>
            <option>BGN</option>
        </select>
        <input style={{borderRadius:'20px',textAlign:'center',marginRight:'30px'}}
        value={result}
        onChange={(e)=>setResult(e.target.value)} type="number" className='result'/> 
        </div>
        <div style={{textAlign:'center'}}>
        <button 
        onClick={exchange}
        className='exchange-button'>Change</button>
        </div>
        </div>
        <div style={{marginTop: '200px', width: '100%', marginRight: '900px',float:'left',position:'relative'}}> 
         <h2 style={{marginTop:'50px', fontSize:'30'}}>Canlı Döviz Kurları</h2>
         <p style={{color:'black'}}>Ülkelerin para birimlerinin birbirine olan oranı sürekli olarak değişir. Bu değişimlerin anlık olarak takip edilmesi canlı döviz kuru takibi olarak adlandırılır.
        Döviz kurları canlı takip edildiğinde döviz piyasasının nabzını tutmanıza yardımcı olur. Düzenli canlı kur takibi ile finansal kararlarınızı güçlendirebilir, finansal okuryazarlığınızı artırabilirsiniz..
        Peki, döviz nedir ve döviz kuru nedir sorularının cevabı nedir? Haydi keşfedelim:</p>
        </div>
    </div>
     
        
  )
}

export default Currency
