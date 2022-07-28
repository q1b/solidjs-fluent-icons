import { splitProps } from "solid-js";
function AnimalDogIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.77 2.4c.42-.3.9-.4 1.23-.4h1.45c.45 0 .9.12 1.28.36l1.78 1.07c.3.18.49.5.49.85V5.5c0 .83-.67 1.5-1.5 1.5H15v8.04c.42.06.84.22 1.2.51.5.43.8 1.08.8 1.95a.5.5 0 01-.5.5H5a3 3 0 01-1.8-5.4.5.5 0 01.6.8A2 2 0 005 17c.29 0 .47-.07.59-.15.12-.08.21-.2.28-.32A1.34 1.34 0 006 16v-.05a4.69 4.69 0 01.03-.5c.04-.33.1-.8.23-1.32.27-1.05.8-2.4 1.89-3.48C9.99 8.8 10 6.33 10 5.5V4c0-.76.33-1.29.77-1.6zm.15 4.5a7.51 7.51 0 01-2.07 4.45 6.47 6.47 0 00-1.61 3.02 8.33 8.33 0 00-.24 1.6v.06a1.78 1.78 0 01-.03.29 2.34 2.34 0 01-.22.68h6.17c-.1-.32-.3-.65-.65-.83-.19-.1-.44-.17-.77-.17h-1a.5.5 0 010-1h1c.18 0 .34.01.5.04V12.5a.5.5 0 011 0v2.95c.58.42.85 1.04.95 1.55h2a1.2 1.2 0 00-.4-.68A1.64 1.64 0 0014.5 16a.5.5 0 01-.5-.5v-9c0-.28.22-.5.5-.5h1a.5.5 0 00.5-.5V4.28l-1.78-1.07a1.5 1.5 0 00-.77-.21H12c-.17 0-.44.06-.65.2-.18.14-.35.36-.35.8v1.5c0 .09.03.23.1.33.06.08.16.17.4.17.24 0 .34-.09.4-.17.07-.1.1-.24.1-.33a.5.5 0 011 0c0 .25-.07.6-.3.92-.24.33-.64.58-1.2.58-.22 0-.4-.04-.58-.1zM7 16h-.5z"/>
    </svg>);
}
export default AnimalDogIcon;
