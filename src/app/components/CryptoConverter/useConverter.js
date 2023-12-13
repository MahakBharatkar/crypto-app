import convertInstance from "./cryptoConvertInstance";
const useConverter = () => {

    (async function() {
        await convertInstance.ready();
      })();
    
      return { convert: convertInstance };
    
}

export default useConverter