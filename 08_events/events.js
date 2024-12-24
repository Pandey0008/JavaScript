 // document.getElementById('owl').onclick = function(){
    //     alert("owl clicked")
    // }

     // attachEvent()
    // jQuery - on

    // type=>type ka mtlb hai ki kis type ka event hai jaise click, mouseover, mouseout etc

    // timeStamp=>timestamp ka mtlb hai ki event ko kitne time me fire kiya gya hai


    //preventDefault=>preventDefault ka use default action ko rokne ke liye hota hai

    //stopPropagation=>stopPropagation ka use event bubbling ko rokne ke liye hota hai

    //target=>target ka mtlb hai ki event kis element pe fire hua hai

    //currentTarget=>currentTarget ka mtlb hai ki event kis element pe attach hua hai

    //toElement=>toElement ka mtlb hai ki event kis element pe jaa rha hai

    //srcElement=>srcElement ka mtlb hai ki event kis element se aaya hai

    //clientX=>clientX ka mtlb hai ki event ka x coordinate

    //clientY=>clientY ka mtlb hai ki event ka y coordinate

    //screenX=>screenX ka mtlb hai ki event ka x coordinate screen ke respect me

    //screenY=>screenY ka mtlb hai ki event ka y coordinate screen ke respect me

    //altkey=>altkey ka mtlb hai ki alt key press kiya gya hai ya nhi

    //ctrlkey=>ctrlkey ka mtlb hai ki ctrl key press kiya gya hai ya nhi

    //shiftkey=>shiftkey ka mtlb hai ki shift key press kiya gya hai ya nhi

    //keyCode=>keyCode ka mtlb hai ki key ka code

    //charCode=>charCode ka mtlb hai ki key ka character code
     
    //

    // document.getElementById('images').addEventListener('click', function(e)//e is event object
    // {
    //     console.log("clicked inside the ul");
    // }, false)//yaha false ka mtlb hai ki event bubbling ko rokne ke liye

    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    //     e.stopPropagation()
    // }, false)
    
    // document.getElementById('google').addEventListener('click',function(e){
   
    // e.preventDefault();// preventDefault() ka use default action ko rokne ke liye hota hai



    //     e.stopPropagation()// stopPropagation() ka use event bubbling ko rokne ke liye hota hai
    //     console.log("google clicked");
    // }, false)
   
    
    document.querySelector('#images').addEventListener('click', function(e){
        console.log(e.target.tagName);
        if (e.target.tagName === 'IMG') {
            console.log(e.target.id);
            let removeIt = e.target.parentNode
            removeIt.remove()//remove() ka use element ko remove karne ke liye hota hai
        }
    
        
    })
    
    //removeIt.parentNode.removeChild(removeIt)