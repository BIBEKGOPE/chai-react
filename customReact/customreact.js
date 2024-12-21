//custom render method
function customRender(raectElement,mainContainer){
    /*
    const domElement= document.createElement
    (raectElement.type)
    domElement.innerHTML=raectElement.children
    domElement.setAttribute('href',raectElement.props.href)
    domElement.setAttribute('target',raectElement.props.target)

   mainContainer.appendChild(domElement)
   */

  const domElement=document.createElement
  (raectElement.type)
  domElement.innerHTML=reactElement.children//whas your child
  for (const prop in reactElement.props) {
    if (prop==='children')continue;
    domElement.setAttribute(prop,reactElement.props[prop])
        
    }
    mainContainer.appendChild(domElement)
  }






//react treee graph
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target: '_blank'
    },
    children: "click me to visit google"
}


const mainContainer =document.querySelector('#root')
customRender(reactElement,mainContainer)//inject react element in main container means root