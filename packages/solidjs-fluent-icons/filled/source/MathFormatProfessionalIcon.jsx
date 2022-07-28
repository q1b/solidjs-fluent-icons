import { splitProps } from "solid-js";
function MathFormatProfessionalIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.25 3.6c.44-.33 1-.65 1.65-.65l.12.01c.43.07.77.23 1.06.5.25.23.44.52.62.78l1.07-1.07a.75.75 0 111.06 1.06L14.5 5.57l.38.7c.08.16.18.24.38.3h.19l.1-.07a5 5 0 00.23-.23.75.75 0 011.06 1.06l-.03.03c-.17.17-.4.4-.69.55a1.78 1.78 0 01-1.2.12 2.02 2.02 0 01-1.38-1.1l-.14-.26-1.06 1.06a.75.75 0 11-1.06-1.06l1.35-1.35a3.01 3.01 0 00-.14-.2 3.34 3.34 0 00-.42-.56.42.42 0 00-.22-.1c-.15.01-.37.1-.7.34a.75.75 0 11-.9-1.2zM5.4 16.3H6c1.4-.1 2.8-.7 3.9-2 .3-.4.2-.8-.1-1.1-.3-.2-.8-.2-1.2.1-.9.7-1.9 1.4-3.1 1.4-.6 0-1.2-.5-1.3-1.1-.1-.5 0-1.1.2-1.6 1.6.1 3.8-.1 4.8-1.3.8-.9 1-2.4 0-3.3-.4-.4-.9-.5-1.4-.5-.9 0-1.8.5-2.6 1.3-1.3 1.3-2.6 3.5-2.4 5.6.1 1.5 1.4 2.4 2.6 2.5zm.8-7.1c.6-.5 1.1-.8 1.6-.8.2 0 .5.1.6.3.2.3 0 .8-.2 1-.5.5-1.8.8-3 .8.3-.5.6-.9 1-1.3z"/>
    </svg>);
}
export default MathFormatProfessionalIcon;
