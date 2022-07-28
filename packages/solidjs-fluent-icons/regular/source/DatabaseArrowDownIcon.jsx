import { splitProps } from "solid-js";
function DatabaseArrowDownIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 5c0-1 .88-1.76 1.9-2.22 1.3-.54 2.7-.8 4.1-.78 1.4-.03 2.8.24 4.1.78C15.13 3.24 16 3.99 16 5v4.2c-.32-.08-.66-.15-1-.18V6.7c-.28.2-.58.38-.9.52-1.3.54-2.7.8-4.1.78-1.4.03-2.8-.24-4.1-.78A4.92 4.92 0 015 6.7V15c0 .37.36.87 1.32 1.31A9.2 9.2 0 009.6 17c.18.36.4.7.66 1H10c-1.4.03-2.8-.24-4.1-.78C4.87 16.75 4 16.01 4 15V5zm1 0c0 .37.36.87 1.32 1.31A9.2 9.2 0 0010 7a9.2 9.2 0 003.68-.69C14.64 5.87 15 5.37 15 5c0-.37-.36-.88-1.32-1.31A9.2 9.2 0 0010 3a9.2 9.2 0 00-3.68.69C5.36 4.12 5 4.63 5 5zm14 9.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.85 2.35a.5.5 0 00.35.15.5.5 0 00.35-.15l2-2a.5.5 0 00-.7-.7L15 15.29V12.5a.5.5 0 00-1 0v2.8l-1.15-1.15a.5.5 0 00-.7.7l2 2z"/>
    </svg>);
}
export default DatabaseArrowDownIcon;
