class TitleDinamic extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        //component base
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = 'Felipe';


        //style component
        const style = document.createElement("style");
        style.textContent = `
        h1{
            color: red;
        }
        `;

        //sent to shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('title-dinamic',TitleDinamic);