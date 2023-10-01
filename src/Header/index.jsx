export default function Header({nItems, setNItems}){

  function convertInput(e){
    const convertedNumber = parseInt(e.target.value, 10);
    if(e.target.value == ""){
      setNItems(0)
    }else if(!isNaN(convertedNumber)){
      setNItems(convertedNumber);
    }
  }

  return (
    <input
      type="text"
      value={nItems}
      onChange={convertInput}
    />
  );
}